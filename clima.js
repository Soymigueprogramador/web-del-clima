// Voy a crear un pequeño objeto para guardar los datos de la "API".
const api = {
  key: '9e122cd782b2d0333f5fe4e7fa192062',
  url: 'https://api.openweathermap.org/data/2.5/weather'
};

const card = document.getElementById('card');
const city = document.getElementById('city');
const date = document.getElementById('date');
const tempImg = document.getElementById('temp-img');
const temp = document.getElementById('temp');
const weather = document.getElementById('weather');
const range = document.getElementById('range');

function actualizarClima(data) {
  const clima = toCelsius(data.main.temp);
  let imagenesDelClima = [];

  if (clima >= 30) {
    imagenesDelClima.push('img/calor.png');
    imagenesDelClima.push('img/verano.png');
  } else if (clima <= 10 && clima > 0) {
    imagenesDelClima.push('img/frio.png');
    imagenesDelClima.push('img/invierno.png');
  } else if (clima >= 0 && clima < 30) {
    imagenesDelClima.push('img/sol.png');
  } else {
    imagenesDelClima.push('img/default.png'); // Imagen por defecto si no se cumple ninguna condición.
  }

  // Actualizar elementos del DOM con los datos y las imágenes del clima.
  temp.innerHTML = clima + '°C';
  tempImg.src = imagenesDelClima[0]; // Mostrar la primera imagen del clima.
}

// Función de conversión de Kelvin a Celsius.
function toCelsius(kelvin) {
  return Math.round(kelvin - 273.15);
}