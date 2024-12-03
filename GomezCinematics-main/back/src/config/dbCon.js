const mongoose = require('mongoose');


const dbCon = async () => {
    //se va a encargar de realizar la conexion con la base de datos
    await mongoose.connect(
        //aqui va la url de mongoose
        "mongodb+srv://mikeagf300:3y3wDhqWeLcg7O68@prueba.ytssfye.mongodb.net/movies?retryWrites=true&w=majority&appName=prueba"
    )
};

module.exports = dbCon;