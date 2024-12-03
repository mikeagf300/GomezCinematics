const movieService = require("../services/movieService");

//Recibir la informacion necesaria para ggestionar la data
//se conecta con el servicio encargado de gestionar la data
//*const basedeDatos = getMoviesService
module.exports = {
    getAllMovies: async (req, res) => {
        try {
            const movies = await movieService.getAllMovies();
            res.status(200).json({
                message:  "Aqui estan todas las movies",
                data: movies });
        } catch (error) {
            res.status(500).json({
                message:  "hubo un error en la aplicacion",
                data: error.message });
        }
    },

    getMovieById: async (req, res) => {
        const { id } = req.params;
        const movie = await movieService.getMovieById(id);
        res.status(200).json(movie)
    },

    getMovieByTitle: async(req, res) => {
        const { title } = req.query;
        const movie = await movieService.findMovieByTitle(title);
        res.status(200).json(movie);
    },
    
    createMovie: async (req, res) => {
        const { title, year, director, duration, genre, rate, poster} = req.body;
        const newMovie = await movieService.createMovie ({title, year, director, duration, genre, rate, poster});
        res.status(201).json(newMovie);
    },
};
