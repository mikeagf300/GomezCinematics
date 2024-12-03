const app = require("./src/server");
const dbCon = require("./src/config/dbCon");

dbCon().then(() => {
    app.listen(3000, () => {
        console.log("Servidor escuchando en el puerto 3000");
    });
}).catch(error => {
    console.error("Error iniciando el servidor:", (err));
});

