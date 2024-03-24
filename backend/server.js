const express = require('express')
const mongoose = require('mongoose');
const cors = require("cors");
const MovieModel = require('./mongoDB')
const multer = require("multer");
const upload = multer({ dest: "uploads/" });

const mongoURI = 'mongodb+srv://aman7015:aman7015@cluster0.wva3zeh.mongodb.net/?retryWrites=true&w=majority'; // Update with your MongoDB URI and database name


const app = express()
const port = 3000

const imagesURL = "http://localhost:3000/uploads/"

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get('/', async(req, res) => {
    const movies = await MovieModel.find({});
    res.json(movies);
})

app.get('/movie/:id', async(req, res)=>{
    try {
        const movie = await MovieModel.findOne({_id : req.params.id});
        res.json(movie);
    }
    catch{
        res.status(400).send("invaid id")
    }
})


app.post('/upload', upload.fields([{ name: 'thumb' }, { name: 'ss' }, { name: 'cast' }]), async (req, res) => {
    let stateObj = { ...req.body };
    stateObj.thumb = imagesURL + req.files['thumb'][0].filename;
    let ss = req.files['ss'].map(info => imagesURL + info.filename);
    stateObj.ss = ss;

    let cast = [];
    for (let i = 0; i < req.files['cast'].length; i++) {
        let obj = {}
        obj.name = stateObj.castName[i];
        obj.image = imagesURL + req.files['cast'][i].filename;
        cast.push(obj);
    }
    stateObj.cast = cast;
    console.log(stateObj);

    let movie = new MovieModel(stateObj);
    movie.save();
    res.json(stateObj);
})



app.get('/uploads/:name', (req, res) => {
    res.sendFile(__dirname + '/uploads/' + req.params.name);
})

mongoose.connect(mongoURI, { dbName: "IMTb" })
    .then(() => {
        console.log("connected to Database");
        app.listen(port, () => {
            console.log(`Example app listening on port ${port}`)
        })
    })