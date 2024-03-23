const express = require('express')
const cors = require("cors");
const multer = require("multer");
const fs = require('fs');
const upload = multer({ dest: "uploads/" });

const app = express()
const port = 3000

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get('/', (req, res)=>{
    res.send("homepage")
})

app.post('/upload',  upload.fields([{name:'thumb'}, {name:'ss'}, {name:'cast'}]),(req, res)=>{
    let stateObj = req.body;
    stateObj.thumb = req.files['thumb'][0].filename;
    let ss = req.files['ss'].map(info=>info.filename);
    stateObj.ss = ss;

    let cast = {};
    for(let i=0; i<req.files['cast'].length; i++){
        cast[stateObj.castName[i]] = req.files['cast'][i].filename;
    }
    stateObj.cast = cast;
    console.log(stateObj);

    res.send('uploaded');
})

app.get('*', (req, res)=>{
    res.send("invalid route")
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})