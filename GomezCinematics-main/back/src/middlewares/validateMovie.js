const { check, validationResult } = require('express-validator');

const validateMovie = [
    // Validaciones para el título
    check('title')
        .notEmpty().withMessage('Titulo es requerido')
        .isString().withMessage('Titulo debe ser una palabra'),

    // Validaciones para el director
    check('director')
        .notEmpty().withMessage('Director es requerido')
        .isString().withMessage('Director debe ser un Nombre'),

    // Validaciones para el año
    check('year')
        .notEmpty().withMessage('Año es requerido')
        .isInt({ min: 1900, max: new Date().getFullYear() }).withMessage('El año debe ser valido'),

    // Validaciones para la duración
    check('duration')
        .notEmpty().withMessage('Duracion es requerida')
        .isString().withMessage('Duration debe ser un numero con minutos ej: 1 hora 10 minutos'),

    // Validaciones para el género
    check('genre')
        .isArray().withMessage('El genero debe ser un array')
        .notEmpty().withMessage('Al menos debe tener un genero')
        .custom((value) => value.every(g => typeof g === 'string')).withMessage('El genero debe ser una palabra'),

    // Validaciones para la calificación
    check('rate')
        .notEmpty().withMessage('El rate es requerido')
        .isFloat({ min: 0, max: 10 }).withMessage('El rate debe ser un numero del 0 al 10'),

    // Función para manejar errores de validación
    (req, res, next) => {
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(400).json({ errors: errors.array() });
        }
        next();
    }
];

module.exports = validateMovie;

  
  