const api = {
  key: "91b3d6ad7f68d50bdb9d71d7a33030f9",
  url: "https://api.openweathermap.org/data/2.5/weather?q=London,uk&APPID=91b3d6ad7f68d50bdb9d71d7a33030f9",
};

const buscar = document.getElementById("buscar");
const cajaBuscar = document.getElementById("cajabuscar");
const buscandoFormulario = document.getElementById("buscando-formulario");
const formBuscar = document.getElementById("formBuscar")
const card = document.getElementById('card')
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
  "./img//parcialmente-nublado-lluvia-y-sol.gif",
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
  const ciudad = document.getElementById("datos").value;
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${ciudad}&APPID=${api.key}`;

  fetch(url)
    .then(Response => Response.json())
    .then((data) => {
      console.log(data);
      actualizarClima(data); // Pasar el objeto "data" en lugar de "datos"
    })
    .catch(error => {
      console.log("error", error);
      swal("ups", "ese dato te lo debo jaja :D", "error");
    });
}

function actualizarClima(data) {
  const clima = toCelsius(data.main.temp);
  const imagenesDelClimaArray = [];

  // Condiciones para las estaciones del clima
  if (clima >= 30) {
    imagenesDelClimaArray.push('img/verano.png');
  } else if (clima <= 0) {
    imagenesDelClimaArray.push('img/invierno.png');
  } else if (clima >= 20) {
    imagenesDelClimaArray.push('img/primavera.png');
  } else if (clima <= 10) {
    imagenesDelClimaArray.push('img/otoño.png');
  }
  
  // Condiciones para los datos del clima
  if (clima === "soleado") {
    imagenesDelClimaArray.push('img/sol.gif');
  } else if (clima === "parcialmente soleado") {
    imagenesDelClimaArray.push('img/parcialmente-nublado.gif');
  } else if (clima === "parcialmente nublado") {
    imagenesDelClimaArray.push('img/parcialmente-nublado.gif');
  } else if (clima === "lluvia" || clima === "probabilidad de lluvia") {
    imagenesDelClimaArray.push('img/lluvia.gif');
  } else if (clima === "parcialmente nublado con mejoras temporareas") {
    imagenesDelClimaArray.push('img/parcialmente-nublado-lluvia-y-sol.gif');
  } else if (clima === "tormenta" || clima === "probabilidad de tormentas") {
    imagenesDelClimaArray.push('img/tormenta.gif');
  }

  temp.innerHTML = clima + "°c";
  tempImg.src = imagenesDelClimaArray[0];
}

function toCelsius(kelvin) {
  return Math.round(kelvin - 273.15);
}