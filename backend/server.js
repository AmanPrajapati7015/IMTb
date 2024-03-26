const express = require('express')
const mongoose = require('mongoose');
const cors = require("cors");
const jwt = require('jsonwebtoken');

const { MovieModel, Users } = require('./mongoDB')
const multer = require("multer");
const upload = multer({ dest: "uploads/" });

const mongoURI = 'mongodb+srv://aman7015:aman7015@cluster0.wva3zeh.mongodb.net/?retryWrites=true&w=majority'; // Update with your MongoDB URI and database name
const secretUser = "aman7015"

const app = express()
const port = 3000

const imagesURL = "http://localhost:3000/uploads/"

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));


const userAuthentication = (req, res, next) => {
    let authToken = req.headers.authorization.split(" ")[1];
    jwt.verify(authToken, secretUser, async (err, user) => {
        if (err) {
            return res.status(403).send("Error in verifing authtoken")
        }
        else {
            const found = await Users.findOne({ username: user.username, password: user.password });
            req.user = found //used while adding to watchlist
            if (found) {
                return next();
            }
            return res.status(400).send("Authentication of user failed")
        }
    })
};

app.post('/users/signup', async (req, res) => {
    const user = { ...req.body, watchList: [] };
    const existingUser = await Users.findOne({ username: user.username });
    if (existingUser) {
        res.status(403).json({ message: 'User already exists' });
    } else {
        const newUser = new Users(user);
        await newUser.save();
        let token = jwt.sign(user, secretUser);
        res.json({ message: 'user created successfully', token });
    }
})

app.post('/users/signin', async (req, res) => {
    const { username, password } = req.headers;
    const user = await Users.findOne({ username, password});
    if (user) {
        let token = jwt.sign({ username, password }, secretUser);
        res.json({ message: 'Logged in successfully', token });
    } else {
        res.status(403).json({ message: 'User authentication failed' });
    }
})

app.put("/user/add-to-watchlist",userAuthentication, async(req, res)=>{
    const user = req.user;
    if(user.watchList.includes(req.body.id)){
        return res.status(403).send("This movie already exist in watchlist");
    }
    user.watchList.push(req.body.id);
    user.save()
    .then(()=>{
        res.send("saved");
    })
    .catch((err)=>{
        res.status(404).send("can't add this movie to watchlist");
    })
})

app.get("/user/watchlist", userAuthentication, async(req, res)=>{
    const movies = req.user.populate("watchList");
    res.send(movies);
})

app.get("/me", userAuthentication, (req, res)=>{
    res.send(req.user.username)
})


app.get('/', async (req, res) => {
    const movies = await MovieModel.find({});
    res.json(movies);
})

app.get('/movie/:id', async (req, res) => {
    try {
        const movie = await MovieModel.findOne({ _id: req.params.id });
        res.json(movie);
    }
    catch {
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