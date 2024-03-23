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

app.post('/upload',  upload.fields([{name:'ss'}, {name:'thumb'}, {name:'cast'}]),(req, res)=>{
    console.log(req.body);
    console.log(req.files['thumb']);
    console.log(req.files['ss']);
    console.log(req.files['cast']);


    res.send('uploaded');
})

app.get('*', (req, res)=>{
    res.send("invalid route")
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})