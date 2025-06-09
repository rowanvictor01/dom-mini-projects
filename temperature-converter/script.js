let inputFieldEl = document.querySelector(".input-field");
let radioCelcFahrEl = document.querySelector("#celc-to-fahr");
let radioFahrCelcEl = document.querySelector("#fahr-to-celc");
let enterBtnEl = document.querySelector(".btn");
let displayEl = document.querySelector(".display");



// entry point
enterBtnEl.onclick = function() {
    let result = 0;
    let userInput = inputFieldEl.value;

    const containsLetter = /[a-zA-Z]/.test(userInput);
    const nanCheck = isNaN(userInput);

    if (containsLetter || nanCheck) {
        displayEl.textContent = `Invalid`;
    }
    else {
        userInput = Number(userInput);
        if (radioCelcFahrEl.checked) {
            result = toFahrenheit(userInput);
            displayEl.textContent = result;
            console.log(userInput);
        }
        else if (radioFahrCelcEl.checked) {
            result = toCelcius(userInput);
            displayEl.textContent = result;
            console.log(userInput);
        }
    }
}


function toFahrenheit(celcius) {
    let F = celcius * (9 / 5) + 32;
    const roundF = Math.round(F * 100) / 100;
    return roundF;
}

function toCelcius(fahrenheit) {
    let C = (fahrenheit - 32) * (5 / 9);
    const roundC = Math.round(C * 100) / 100;
    return roundC;
}

