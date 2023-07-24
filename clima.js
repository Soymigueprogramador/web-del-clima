//objeto en el cual se guardan los datos de la api.
const api = {
  key: "91b3d6ad7f68d50bdb9d71d7a33030f9",
  url: "https://api.openweathermap.org/data/2.5/weather?q=London,uk&APPID=91b3d6ad7f68d50bdb9d71d7a33030f9",
};
//conectamos los ID.
const buscar = document.getElementById("buscar");
const cajaBuscar = document.getElementById("cajabuscar");
const buscandoFormulario = document.getElementById("buscando-formulario");
const cityinput = document.getElementById('cityinput');
const datos = document.getElementById('datos');
const tempImg = document.getElementById('temp-img');
const temp = document.getElementById('temp');
const weather = document.getElementById('weather');
const range = document.getElementById('range');
//array donde se guardan las imagenes que se van a mostrar en pantalla.
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
//funcion para buscar en el formulario donde se pone el nombre de la cuidad a buscar.
function submitForm(e) {
  e.preventDefault();
  Buscar();
}
//llamamos a dicha funcion
buscandoFormulario.addEventListener('submit', submitForm);
function Buscar() {
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${cajaBuscar.value}&APPID=${api.key}`;
//fetch para recibir, ver los datos devueltos por la api y en caso error dar un mensaje.
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
//funcion que actualiza los datos del clima segun la zona en la que se busca.
function actualizarClima(data) {
  const clima = toCelsius(data.main.temp);
  const imagenesDelClimaArray = [];
//condicionales del clima
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
//nos va a permitir modificar el dom y ver los datos en pantalla. 
  temp.innerHTML = clima + "°C";
  tempImg.src = imagenesDelClimaArray[0];
}
//funcion que muestra en que escala se muestra la temperatura de la cuidad en la pantalla. 
function toCelsius(kelvin) {
  return Math.round(kelvin - 273.15);
}
//web del clima es un proyecto creado para el curso de JavaScript de coderhouse. 