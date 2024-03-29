const express = require('express')
const jwt = require('jsonwebtoken');
const { Users } = require('./mongoDB')

const app = express.Router();

const secretUser = "aman7015"


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

app.post('/signup', async (req, res) => {
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

app.post('/signin', async (req, res) => {
    const { username, password } = req.headers;
    const user = await Users.findOne({ username, password});
    if (user) {
        let token = jwt.sign({ username, password }, secretUser);
        res.json({ message: 'Logged in successfully', token });
    } else {
        res.status(403).json({ message: 'User authentication failed' });
    }
})

app.put("/add-to-watchlist",userAuthentication, async(req, res)=>{
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


app.put("/remove-watchlist",userAuthentication, async(req, res)=>{
    const user = req.user;
    if(! user.watchList.includes(req.body.id)){
        return res.status(403).send("This movie does not exist in watchlist");
    }
    user.watchList = user.watchList.filter(m_id => m_id != req.body.id);

    user.save()
    .then(()=>{
        res.send("saved");
    })
    .catch((err)=>{
        res.status(404).send("can't add this movie to watchlist");
    })
})


app.get("/watchlist", userAuthentication, async(req, res)=>{
    const userPopulated = await req.user.populate("watchList");
    res.send(userPopulated.watchList);
})


app.get("/me", userAuthentication, (req, res)=>{
    res.send(req.user.username)
})

module.exports = app;