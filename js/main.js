// Cuando suceda el evento click en botón update:
//    1. Leer valor del select
//    2. Escribirlo en el <h2> del html
//    3. Cambiar color fondo aleatoriamente entre amarillo y naranja
//          3.1. Seleccionar un color aleatoriamente
//              3.1.1. Generar un número aleatorio entre 1-100
//              3.1.2. Determinar si el número es par o impar
//          3.2. Pintar el fondo
//              3.2.1. Ubicar el body
//              3.2.2. Aplicar estilo

//función importada de: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/random:
function getRandomIntInclusive(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1) + min); // The maximum is inclusive and the minimum is inclusive
}

const buttonUpdate = document.querySelector('.js-button-update');
const selectElement = document.querySelector('.js-box-faces');
const resultFaceH2 = document.querySelector('.js-result-face');
const bodyElement = document.querySelector('.js-body');


function changeStatusAndBackground(event) {
    const selectedStatus = selectElement.value;
    resultFaceH2.innerHTML = selectedStatus;
    const randomNumber = getRandomIntInclusive(1, 100);
    const isEven = randomNumber % 2 === 0;
    if (isEven) {
        bodyElement.classList.add('yellow-body');
        bodyElement.classList.remove('orange-body');
        //console.log(`${randomNumber} es par: Pinta amarillo`)
    } else {
        bodyElement.classList.add('orange-body');
        bodyElement.classList.remove('yellow-body');
        //console.log(`${randomNumber} es impar: Pinta naranja fuego`)
    }

};

buttonUpdate.addEventListener('click', changeStatusAndBackground);

