const mongoose = require('mongoose');

const movieSchema = new mongoose.Schema({
    castName: [String],
    name: String,
    plot: String,
    rating: String,
    trailer: String,
    thumb: String,
    ss: [String],
    cast: [{ name: String, image: String }]
});

const userSchema = new mongoose.Schema({
    username:String,
    password:String,
    watchList:[{type:mongoose.Schema.Types.ObjectId, ref:'Movie'}]
})

const MovieModel = mongoose.model('Movie', movieSchema);
const Users = mongoose.model("user", userSchema);

module.exports = {MovieModel, Users}
