// Voy a crear un pequeño objeto para guardar los datos de la "API".
const api = {
  key: "91b3d6ad7f68d50bdb9d71d7a33030f9",
  url: "api.openweathermap.org/data/2.5/weather?q=London,uk&APPID=91b3d6ad7f68d50bdb9d71d7a33030f9",
}

const card = document.getElementById('card');
const city = document.getElementById('city');
const date = document.getElementById('date');
const tempImg = document.getElementById('temp-img');
const temp = document.getElementById('temp');
const weather = document.getElementById('weather');
const range = document.getElementById('range');

const imagenesDelClima = [
  "./img/calor.png",
  "./img/frio.png",
  "./img/imagenes-del-otoño.png",
  "./img/lluvia.png",
  "./img/muñeco-de-nieve.png",
  "./img/nubes.png",
  "./img/otoño-jpg.jpg",
  "./img/primavera.png",
  "./img/sol-nubes-y-lluvia.jpg",
  "./img/sol.png",
  "./img/tormenta.png",
  "./img/verano.png",
];

function actualizarClima(data) {
  const clima = toCelsius(data.main.temp);
  const imagenesDelClima = [];

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
    alert("up", "te debo la info master");
  }
  
  // Actualizar elementos del DOM con los datos y las imágenes del clima.
  temp.innerHTML = clima + '°C';
  tempImg.src = imagenesDelClima[0]; // Mostrar la primera imagen del clima.
}


// Función de conversión de Kelvin a Celsius.
function toCelsius(kelvin) {
  return Math.round(kelvin - 273.15);
}