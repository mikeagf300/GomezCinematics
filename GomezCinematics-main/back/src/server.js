const express = require("express");
const morgan = require("morgan");
const cors = require("cors");
const path = require('path');
const router = require("./routes/");
const logger = require('./middlewares/logger'); // Importar el middleware de registro
const errorHandler = require('./middlewares/errorHandler'); // Importar el middleware de manejo de errores

const app = express();

// Middleware para registrar las solicitudes HTTP
app.use(morgan("dev"));

// Middleware personalizado para registrar solicitudes
app.use(logger);

// Middleware para habilitar CORS
app.use(cors());

// Middleware para manejar datos JSON
app.use(express.json());

// Middleware para manejar datos codificados en URL
app.use(express.urlencoded({ extended: true }));

// Servir archivos estáticos desde la carpeta "front"
app.use(express.static(path.join(__dirname, '../front')));

app.use(router);

// Middleware para manejar errores (debe estar después de las rutas)
app.use(errorHandler);

module.exports = app;

