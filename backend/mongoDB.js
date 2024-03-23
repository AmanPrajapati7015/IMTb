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

const Movie = mongoose.model('Movie', movieSchema);

module.exports = Movie
