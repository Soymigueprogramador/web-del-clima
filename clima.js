// Voy a crear un pequeño objeto para guardar los datos de la "API".
const api = {
  key: '9e122cd782b2d0333f5fe4e7fa192062',
  url: 'https://api.openweathermap.org/data/2.5/weather'
};
// Voy a conectar los "ID".
const card = document.getElementById('card');

const city = document.getElementById('city');
const date = document.getElementById('date');
const tempImg = document.getElementById('temp-img');
const temp = document.getElementById('temp');
const weather = document.getElementById('weather');
const range = document.getElementById('range');

// Voy a crear los condicionales que actualizan y muestran datos e imágenes del clima.
function actualizarClima(data) {
  const clima = toCelsius(data.main.clima);
  let imagenesDelClima = [];
}

  if (clima >= 30) {
    imagenesDelClima.push('img/calor.png');
    imagenesDelClima.push('img/verano.png');
  } else if (clima === 'nublado' || clima === 'lluvia') {
    imagenesDelClima.push('img/lluvia.png');
    imagenesDelClima.push('img/nubes.png');
  } else if (clima === 'tormenta' || clima === 'lluvia con sol') {
    imagenesDelClima.push('img/sol-nubes-y-lluvia.jpg');
    imagenesDelClima.push('img/tormenta.png');
  } else if (clima <= 10 && clima > 0) {
    imagenesDelClima.push('img/frio.png');
    imagenesDelClima.push('img/invierno.png');
  } else if (clima >= 0) {
    imagenesDelClima.push('img/muñeco-de-nieve.png');
    imagenesDelClima.push('img/frio.png');
  } else if (clima <= 20) {
    imagenesDelClima.push('img/sol.png');
    imagenesDelClima.push
  }