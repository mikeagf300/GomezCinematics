// Función para obtener datos desde el servidor
const renderizarTarjetas = require('./3renderizarTarjetas');
const axios = require("axios");

async function obtenerDatos() {
    try {
      const response = await fetch('http://localhost:3000/movies');
      if (!response.ok) {
        throw new Error('Hubo un problema con la solicitud AJAX');
      }
      const data = await response.json();
      renderizarTarjetas(data.peliculas);
    } catch (error) {
      console.error('Hubo un problema con la solicitud AJAX:', error);
    }
  }
        
        /*renderizarTarjetas(response.data.data);
    } catch (error) {
        console.error('Hubo un problema con la solicitud AJAX:', error);
    }
}*/

module.exports = obtenerDatos;

  