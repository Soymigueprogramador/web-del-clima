/*Voy a crear un pequeño objeto para guardar los datos de la "API".
const api = {
  key: "91b3d6ad7f68d50bdb9d71d7a33030f9",
  url: "api.openweathermap.org/data/2.5/weather?q=London,uk&APPID=91b3d6ad7f68d50bdb9d71d7a33030f9",
}
//voy a conectar los "ID" que estan dentro del html.
const buscar = document.getElementById("Buscar");
const cajaBuscar = document.getElementById("cajabuscar");
const buscandoFormulario = document.getElementById("buscando-formulario"); 
const card = document.getElementById('card');
const city = document.getElementById('city');
const date = document.getElementById('date');
const tempImg = document.getElementById('temp-img');
const temp = document.getElementById('temp');
const weather = document.getElementById('weather');
const range = document.getElementById('range');
//voy a crear el array con los iconos que se beran en el dom.
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
//voy a ir creando las funciones para tomar los datos. 
formBuscar.addEventListener("submit", (e) => {
  e.preventDefault();
});
//voy a crear la funcion buscar.
function Buscar() {
  const city = cityinput.value;
  const url = "https:api.openweathermap.org/data/2.5/weather?q=${city}&APPID=${api.key}";
  //voy hacer las peticiones a la api. 
  fetch(url)
    .then(Response => Response.json())
    .then((data) => {
      actualizarClima(data);
    })
    .catch(error => {
      console.log("error", error);
      swal("ups", "ese dato te lo debo jaja :D", "error");
    })
}
//voy a crear la funcion actualizar clima.
function actualizarClima(data) {
  const clima = toCelsius(data.main.temp);
}
//voy a crear la funcion que me va a permitir actualizar los datos del clima. //
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
  //voy a actualizar el dom con los datos y las imagenes, 
  temp.innerHTML = clima + "°c";
  // Actualizar elementos del DOM con los datos y las imágenes del clima.
  tempImg.src = imagenesDelClima[0]; // Mostrar la primera imagen del clima.
}
// Función de conversión de Kelvin a Celsius.
function toCelsius(kelvin) {
  return Math.round(kelvin - 273.15);
}*/

const api = {
  key: "91b3d6ad7f68d50bdb9d71d7a33030f9",
  url: "https://api.openweathermap.org/data/2.5/weather?q=London,uk&APPID=91b3d6ad7f68d50bdb9d71d7a33030f9",
};

const buscar = document.getElementById("Buscar");
const cajaBuscar = document.getElementById("cajabuscar");
const buscandoFormulario = document.getElementById("buscando-formulario");
const formBuscar = document.getElementById("formBuscar");
const card = document.getElementById('card');
const cityinput = document.getElementById('cityinput');
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

buscandoFormulario.addEventListener("submit", (e) => {
  e.preventDefault();
  Buscar();
});

function Buscar() {
  const cityInput = document.getElementById('cityInput');
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&APPID=${api.key}`;

  fetch(url)
    .then(Response => Response.json())
    .then((data) => {
      actualizarClima(data);
    })
    .catch(error => {
      console.log("error", error);
      swal("ups", "ese dato te lo debo jaja :D", "error");
    });
}

function actualizarClima(data) {
  const clima = toCelsius(data.main.temp);
  const imagenesDelClimaArray = [];

  if (clima >= 30) {
    imagenesDelClimaArray.push('img/calor.png');
    imagenesDelClimaArray.push('img/verano.png');
  } else if (clima <= 10 && clima > 0) {
    imagenesDelClimaArray.push('img/frio.png');
    imagenesDelClimaArray.push('img/invierno.png');
  } else if (clima >= 0 && clima < 30) {
    imagenesDelClimaArray.push('img/sol.png');
  } else {
    imagenesDelClimaArray.push('img/default.png');
    swal("up", "te debo la info master", "info");
  }

  temp.innerHTML = clima + "°c";
  tempImg.src = imagenesDelClimaArray[0];
}

function toCelsius(kelvin) {
  return Math.round(kelvin - 273.15);
}
