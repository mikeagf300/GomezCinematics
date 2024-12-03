const axios = require("axios");

const { Movie } = require("../models/Movie.js")



module.exports = {
    getAllMovies: async () => {
        try {
            const movies = await Movie.find(); 
        return movies;
        } catch (error) {
            throw error
        }
        
    },

    getMovieById: async (id) => {
        const movie = await Movie.findById(id);
        return movie;
    },

    findMovieByTitle: async (title) => {
        const movie = await Movie.findOne({title});
        return movie;
    },

    createMovie: async (movie) => {
        const newMovie = await Movie.create(movie);
        return newMovie;
    },
};


