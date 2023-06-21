/*voy a conectar los "ID" del HTML.
//voy a crear un pequeño objeto para guardar los datos de la "API".
const api = {
  key: '9e122cd782b2d0333f5fe4e7fa192062',
  url: `https://api.openweathermap.org/data/2.5/weather`
}
//voy a conectar los "ID". 
const card = document.getElementById('card')

const city = document.getElementById('city');
const date = document.getElementById('date');
const tempImg = document.getElementById('temp-img');
const temp = document.getElementById('temp');
const weather = document.getElementById('weather');
const range = document.getElementById('range');
//voy a crear los "condicionales que actualizar y muestran datos e imagenes del clima".
function actualizarClima(data) {
  const clima = toCelsius(data.main.clima);
  if(clima >= 30) {
  imagenesDelClima = "img/calor.png";
  imagenesDelClima = "img/verano.png";
  } else if(clima === "nublado", "lluvia") {
    imagenesDelClima = "img/lluvia.png";
    imagenesDelClima = "img/nubes.png";
  } else if(clima === "tormenta", "lluvia con sol") {
    imagenesDelClima = "img/sol-nubes-y-lluvia.jpg";
    imagenesDelClima = "img/tormenta.png";
  } 
  if(clima <= 10 && clima > 0) {
    imagenesDelClima = "img/frio.png";
    imagenesDelClima = "img/invierno.png";
  } else if(clima >= 0) {
    imagenesDelClima = "img/muñeco-de-nieve.png";
    imagenesDelClima = "img/frio.png";
  }
  if(clima <= 20) {
    imagenesDelClima = "img/sol.png";
    imagenesDelClima = "img/primavera.png";
  }
  if(clima < 10 || clima > 20) {
    imagenesDelClima = "img/otoño-jpg.jpg"; 
    imagenesDelClima = "img/imagenes-del-otoño.png";
  }
  imagenesDelClima.src = src; 
}
//voy a crear la "funcion asincronica".
async function search(query) {
  try {
    const response = await fetch(`${api.url}?q=${query}&appid=${api.key}&lang=es`);
    const data = await response.json();
    card.style.display = 'block';
    city.innerHTML = `${data.name}, ${data.sys.country}`;
    data.innerHTML = (new Date()).toLocaleDateString();
    temp.innerHTML = `${toCelsius(data.main.temp)}c`;
    weather.innerHTML = data.weather[0].description;
    range.innerHTML = `${toCelsius(data.main.temp_min)}c / ${toCelsius(data.main.temp_max)}c`;
    updateImages(data);
  } catch (err) {
    console.log(err);
    alert('Hubo un error');
  }
}
//voy a crear la funcion "celsius".
function toCelsius(kelvin) {
  return Math.round((kelvin - 273.15));
}
//voy a crear la funcion "onsubmit".
function onsubmit(event) {
  event.preventDefault();
  alert("cajaBuscar.value") 
}
//voy a conectar los "ID".
const buscandoFormulario = document.getElementById("buscando-formulario");
const cajaBuscar = document.getElementById("cajabuscar");
FormData.addEventListener("submite", onsubmit, true);*/

// Voy a conectar los "ID" del HTML.
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