//En este modulo van a estar las funciones que establecen LA LOGICA de NEGOCIO de cada una de las rutas

//Para esa ruta GET /users => 
    //Vamos a ir a la base de datos la informacion de los usuarios y 
//Responder al cliente con la informacion obtenida .

const movieController =(req, res) => {
    res.status(200).send("Estamos enviando informacion sobre movies");
}

module.exports = {
    movieController
};