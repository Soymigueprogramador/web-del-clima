const api = {
  key: "91b3d6ad7f68d50bdb9d71d7a33030f9",
  url: "https://api.openweathermap.org/data/2.5/weather?q=London,uk&APPID=91b3d6ad7f68d50bdb9d71d7a33030f9",
};

const buscar = document.getElementById("buscar");
const cajaBuscar = document.getElementById("cajabuscar");
const buscandoFormulario = document.getElementById("buscando-formulario");
const cityinput = document.getElementById('cityinput');
const datos = document.getElementById('datos');
const tempImg = document.getElementById('temp-img');
const temp = document.getElementById('temp');
const weather = document.getElementById('weather');
const range = document.getElementById('range');

const imagenesDelClima = [
  "./img/invierno.png",
  "./img/lluvia.gif",
  "./img/nublado.png",
  "./img/soleado.png",
  "./img/parcialmente_nubes.jpg",
  "./img/parcialmente-nublado-lluvia-y-sol.gif",
  "./img/primavera.png",
  "./img/tormentas.jpg",
  "./img/verano.png",
  "./img/otoño.png"
];

function submitForm(e) {
  e.preventDefault();
  Buscar();
}
buscandoFormulario.addEventListener('submit', submitForm);

function Buscar() {
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${cajaBuscar.value}&APPID=${api.key}`;

  fetch(url)
    .then(response => response.json())
    .then((data) => {
      console.log(data);
      actualizarClima(data);
    })
    .catch(error => {
      console.log("error", error);
      swal("Ups", "Ese dato te lo debo jaja :D", "error");
    });
}

function actualizarClima(data) {
  const clima = toCelsius(data.main.temp);
  const imagenesDelClimaArray = [];

  // Condiciones para las estaciones del clima
  if (clima >= 30) {
    imagenesDelClimaArray.push(imagenesDelClima[8]);
  } else if (clima >= 20) {
    imagenesDelClimaArray.push(imagenesDelClima[6]);
  } else if (clima >= 10) {
    imagenesDelClimaArray.push(imagenesDelClima[9]);
  } else if (clima >= 0) {
    imagenesDelClimaArray.push(imagenesDelClima[7]);
  } else if (clima < 0) {
    imagenesDelClimaArray.push(imagenesDelClima[0]);
  }

  // Condiciones para los datos del clima
  if (clima >= 25) {
    imagenesDelClimaArray.push(imagenesDelClima[3]);
  } else if (clima >= 15) {
    imagenesDelClimaArray.push(imagenesDelClima[4]);
  } else if (clima >= 5) {
    imagenesDelClimaArray.push(imagenesDelClima[2]);
  } else if (clima >= 0) {
    imagenesDelClimaArray.push(imagenesDelClima[5]);
  } else if (clima < 0) {
    imagenesDelClimaArray.push(imagenesDelClima[1]);
  }

  temp.innerHTML = clima + "°C";
  tempImg.src = imagenesDelClimaArray[0];
}

function toCelsius(kelvin) {
  return Math.round(kelvin - 273.15);
}