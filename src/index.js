"strict mode"

let turnOff = document.querySelector('button#apagar');
let turnOn = document.querySelector('button#acender');
let imgTurnOff = document.querySelector('img#apagarLuz');
let imgTurnOn = document.querySelector('img#ascenderLuz');

function turnOnTheLight() {
  imgTurnOn.style.display = 'flex';
  imgTurnOff.style.display = 'none';
}

function turnOffTheLight() {
  imgTurnOff.style.display = 'flex';
  imgTurnOn.style.display = 'none';
}

turnOn.addEventListener('click', turnOnTheLight);
turnOff.addEventListener('click', turnOffTheLight);
