// Middleware para registrar las solicitudes
const logger = (req, res, next) => {
    console.log(`${req.method} ${req.url}`);
    next();
};

module.exports = logger;

