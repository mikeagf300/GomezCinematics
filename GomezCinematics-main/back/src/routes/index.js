//Aqui se va a definir las rutas con las cuales nos podemos comunicar

//Tengo definida la solicitud tipo GET a /users => controlador

const { Router } = require("express");
const movieRouter = require("./movieRouter");

const router = Router();

router.use("/movies", movieRouter);

module.exports = router;