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
  "./img/invierno.png",
  "./img/lluvia.gif",
  "./img/nublado.png",
  "./img/otoño.png",
  "./img/primavera.png",
  "./img/parcialmente-nublado-lluvia-y-sol.gif",
  "./img/sol.gif",
  "./img/tormenta.gif",
  "./img/verano.png",
  "./img/parcialmente-nublado.gif"
];

buscandoFormulario.addEventListener("submit", (e) => {
  e.preventDefault();
  Buscar();
});

function Buscar() {
  const cityInput = document.getElementById("cityinput").value;
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${cityInput}&APPID=${api.key}`;

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

  // Condiciones para las estaciones del clima
  if (clima >= 30) {
    imagenesDelClimaArray.push('img/verano.png.png');
  } else if (clima <= 0) {
    imagenesDelClimaArray.push('img/invierno.png.png');
  } else if (clima >= 20) {
    imagenesDelClimaArray.push('img/primavera.png.png');
  } else if (clima <= 10) {
    imagenesDelClimaArray.push('img/otoño.png.png');
  }
//creo este condicional para los datos del clima. 
if(clima === "soleado") {
  imagenesDelClimaArray.push('img/sol.gif');
}
else if(clima === "parcialmente soleado") {
  imagenesDelClimaArray.push('img/parcialmente-nublado.gif'); //este gif se va a usar para el mismo clima ya que es el mismo icono.
}
else if(clima === "parcialmente nublado") {
  imagenesDelClimaArray.push('img/parcialmente-nublado.gif'); //este gif se va a usar para el mismo clima ya que es el mismo icono.
}
else if(clima === "lluvia") {
  imagenesDelClimaArray.push('img/lluvia.gif');
} 
else if(clima === "parcialmente nublado con mejoras temporareas") {
  imagenesDelClimaArray.push('img/parcialmente-nublado-lluvia-y-sol.gif');
} 
else if(clima === "lluvias") {
  imagenesDelClimaArray.push('img/lluvias.gif');
} 
else if(clima === "tormenta") {
  imagenesDelClimaArray.push('img/tormenta.gif');
}

  temp.innerHTML = clima + "°c";
  tempImg.src = imagenesDelClimaArray[0];
}

function toCelsius(kelvin) {
  return Math.round(kelvin - 273.15);
}