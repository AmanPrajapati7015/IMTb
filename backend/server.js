const express = require('express')
const cors = require('cors');
const multer = require("multer");
const upload = multer({ dest: "uploads/" });

const app = express()
const port = 3000

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors())

app.get('/', (req, res)=>{
    res.send("homepage")
})

app.post('/upload', upload.array("files"), (req, res)=>{
    console.log(req.body);
    console.log(req.files);
    res.send('uploaded');
})

app.get('*', (req, res)=>{
    res.send("invalid route")
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})