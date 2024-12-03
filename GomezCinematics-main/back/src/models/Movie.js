const mongoose = require('mongoose');

const movieConfig = {
    title:  { type: String, required: true },
    year: Number,
    director: String,
    duration: String,
    genre: Array,
    rate: Number,
    poster: String,
};

const movieSchema = new mongoose.Schema(movieConfig);

const Movie = mongoose.model("Movie", movieSchema)

module.exports = {
    Movie
}


