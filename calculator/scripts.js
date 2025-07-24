//
//
//

// Display and button elements
const screenEl = document.querySelector(".screen");
const buttonsEl = document.querySelectorAll("button");

// Special Buttons
const acEl = document.querySelector(".ac");
const plusMinusEl = document.querySelector(".plus-minus");
const percentEl = document.querySelector(".percent");
const divideEl = document.querySelector(".divide");
const timesEl = document.querySelector(".times");
const minusEl = document.querySelector(".minus");
const plusEl = document.querySelector(".plus");
const pointEl = document.querySelector(".period");
const equalsEl = document.querySelector(".equals");

// Store operands
let pendingDigits = [];
let storedRands = [];
let storedRators = [];
let displayBuffer;
let hasDecimalPoint = false;

function calculate(button) {
    let value = button.textContent;
    let joined;

    console.log(storedRands);
    console.log(storedRators);

    if (button === plusEl) {
        // add
        joined = pendingDigits.join("");
        storedRands.push(joined);
        storedRators.push(value);
        pendingDigits.length = 0;
        hasDecimalPoint = false;
        // write in a function
        console.log(storedRators);
    }
    else if (button === minusEl) {
        // subtract
        joined = pendingDigits.join("");
        storedRands.push(joined);
        storedRators.push(value);
        pendingDigits.length = 0;
        hasDecimalPoint = false;
        // write in a function
        console.log(storedRators);
    }
    else if (button === timesEl) {
        // multiply
        joined = pendingDigits.join("");
        storedRands.push(joined);
        storedRators.push(value);
        pendingDigits.length = 0;
        hasDecimalPoint = false;
        // write in a function
        console.log(storedRators);
    }
    else if (button === divideEl) {
        // divide
        joined = pendingDigits.join("");
        storedRands.push(joined);
        storedRators.push(value);
        pendingDigits.length = 0;
        hasDecimalPoint = false;
        // write in a function
        console.log(storedRators);
    }
    else if (button === equalsEl) {
        // show result
        joined = pendingDigits.join("");
        storedRands.push(joined);
        pendingDigits.length = 0;
        screenEl.textContent = 0

        hasDecimalPoint = false;
        let result = 0;

        // Write in a function when refactoring
        if (storedRators[0] === plusEl.textContent) {
            result = Number(storedRands[0]) + Number(storedRands[1]);
            screenEl.textContent = result.toFixed(3);
        }
        else if (storedRators[0] === minusEl.textContent) {
            result = Number(storedRands[0]) - Number(storedRands[1]);
            screenEl.textContent = result.toFixed(3);
        }
        else if (storedRators[0] === timesEl.textContent) {
            result = Number(storedRands[0]) * Number(storedRands[1]);
            screenEl.textContent = result.toFixed(3);
        }
        else if (storedRators[0] === divideEl.textContent) {
            result = Number(storedRands[0]) / Number(storedRands[1]);
            screenEl.textContent = result.toFixed(3);
        }
    }
    else if (button === acEl) {
        // clear
        storedRands.length = 0;
        storedRators.length = 0;
        pendingDigits.length = 0;
        displayBuffer = 0;
        screenEl.textContent = 0;
        hasDecimalPoint = false;
    }
    else if (button === pointEl) {
        // decimal point
        if (!hasDecimalPoint) {
            pendingDigits.push(pointEl.textContent);
            displayBuffer = pendingDigits.join("");
            screenEl.textContent = displayBuffer;

            hasDecimalPoint = true; // flag to avoid duplicate decimal points
        }
    }
    else if (button === percentEl) {
        // percent
        console.log(value)
    }
    else if (button === plusMinusEl) {
        // plus minus
        console.log(value)
    }
    else {
        pendingDigits.push(value); // store inputs to array
        displayBuffer = pendingDigits.join(""); // removed separation in array for display
        screenEl.textContent = displayBuffer; // display digits
    }
}

buttonsEl.forEach(button => button.addEventListener("click", () => calculate(button)));

/****************************************************
 * Start with calculations between 2 operands
 * Then proceed with more than 2 operands with different operators
*****************************************************/
