// Función para renderizar tarjetas
function renderizarTarjetas(data) {
  const contenedorTarjetas = document.getElementById('tarjetasDePeliculas');
  if (contenedorTarjetas) {
    contenedorTarjetas.innerHTML = ''; // Limpiar el contenido existente
    peliculas.forEach(pelicula => {
      // Crear y agregar las tarjetas de películas
      const tarjeta = document.createElement('div');
      tarjeta.className = 'tarjeta';
      tarjeta.innerHTML = `
        <h3>${pelicula.titulo}</h3>
        <p>Director: ${pelicula.director}</p>
        <p>Año: ${pelicula.año}</p>
        <p>Duración: ${pelicula.duracion}</p>
        <p>Género: ${pelicula.genero}</p>
        <p>Calificación: ${pelicula.calificacion}</p>
        <img src="${pelicula.poster}" alt="Poster de ${pelicula.titulo}">
      `;
      contenedorTarjetas.appendChild(tarjeta);
    });
  }
}
  
  
  /*contenedorTarjetas.innerHTML = ''; // Limpiar contenido previo


  const tarjetas = data.map(pelicula => {
      const tarjeta = document.createElement('section');
      const titulo = document.createElement('h2');
      titulo.textContent = pelicula.title;

      const poster = document.createElement('img');
      poster.setAttribute('src', pelicula.poster);
      poster.setAttribute('alt', `Poster de ${pelicula.title}`);

      const director = document.createElement('p');
      director.textContent = `Director: ${pelicula.director}`;

      const year = document.createElement('p');
      year.textContent = `Año: ${pelicula.year}`;

      const duration = document.createElement('p');
      duration.textContent = `Duración: ${pelicula.duration}`;

      const genre = document.createElement('p');
      genre.textContent = `Género: ${pelicula.genre.join(', ')}`;

      const rating = document.createElement('p');
      rating.textContent = `Rating: ${pelicula.rate}`;

      tarjeta.appendChild(titulo);
      tarjeta.appendChild(poster);
      tarjeta.appendChild(director);
      tarjeta.appendChild(year);
      tarjeta.appendChild(duration);
      tarjeta.appendChild(genre);
      tarjeta.appendChild(rating);

      tarjeta.classList.add('tarjeta-pelicula'); 
      return tarjeta;
  });

  // Añadir las tarjetas al contenedor
  tarjetas.forEach(tarjeta => contenedorTarjetas.appendChild(tarjeta));
}
*/
module.exports = renderizarTarjetas;
