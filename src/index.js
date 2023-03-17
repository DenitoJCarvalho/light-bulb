
// const btnAcender = document.querySelector("#acender")
// const btnApagar = document.querySelector("#apagar")

// //acender luz
// btnAcender.addEventListener('click', () => {
//     let imgAcender = document.querySelector("#acenderLuz")
//     let imgApagar = document.querySelector("#apagarLuz")

//     imgApagar.style.display = "none"
//     setTimeout(() => {
//         imgApagar.style.display = "none"
//         imgAcender.style.display = "flex"
//     }, 120)

// })

// //apagar luz
// btnApagar.addEventListener('click', () => {
//     let imgAcender = document.querySelector("#acenderLuz")
//     let imgApagar = document.querySelector("#apagarLuz")

//     setTimeout(() => {
//         imgAcender.style.display = 'none'
//         imgApagar.style.display = 'flex'
//     }, 120)
// })
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
