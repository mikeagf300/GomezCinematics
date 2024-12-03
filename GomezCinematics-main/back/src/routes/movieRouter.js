const express = require('express');
const movieRouter = express.Router();
const movieController = require("../controllers/movieController");
const validateMovie = require('../middlewares/validateMovie');

// Definir rutas
movieRouter.get("/", movieController.getAllMovies);
movieRouter.get("/movies/byTitle", movieController.getMovieByTitle);
movieRouter.get("/:id", movieController.getMovieById);

// Ruta para crear una película
movieRouter.post("/", validateMovie, movieController.createMovie); 

module.exports = movieRouter;
