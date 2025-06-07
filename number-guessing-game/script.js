// add variable to get html element for displaying array
const inputEl = document.querySelector("#input");
const submitEl = document.querySelector("#submit");
const gameMsgEl = document.querySelector("#game-message");
const triesEl = document.querySelector("#tries");

let guessHistory = [];

let userInput = "";
let randomNum = Math.floor(Math.random() * 100 + 1);
let numOfTries = 9;
let isAlive = true;
let hasWon = false;
let isValid = true;

// game's entry point
submitEl.onclick = function() {
    userInput = inputEl.value;
    userInput = Number(userInput);
    inputValidation(userInput);

    gameOver();


    if (isAlive && !hasWon && isValid) {
        gameState();
        arrayManip();
    }
    else if (!isAlive || hasWon) {
        reset();
    }
}



function gameState() {
    if (userInput < randomNum) {
        triesEl.textContent = `${numOfTries} Tries Remaining!`
        numOfTries--;
        gameMsgEl.textContent = "Too Low!";
        inputEl.value = "";
    }

    else if (userInput > randomNum) {
        triesEl.textContent = `${numOfTries} Tries Remaining!`;
        numOfTries--;
        gameMsgEl.textContent = "Too High!";
        inputEl.value = "";
    }

    else if (userInput === randomNum) {
        hasWon = true;
        numOfTries--;
        winMsg();
        gameMsgEl.textContent = `Correct, ${randomNum} is my number! You guessed correctly!`;
        inputEl.value = "";
    }
    console.log(numOfTries);
    console.log(randomNum);
}



function reset() {
    if (!isAlive || hasWon) {
        inputEl.value = "";
        randomNum = Math.floor(Math.random() * 100 + 1);
        numOfTries = 9;
        isAlive = true;
        hasWon = false;

        guessHistory = [];
    }
}

function gameOver() {
    if (numOfTries < 1) {
        isAlive = false;
        gameMsgEl.textContent = "You've ran out of tries. Game Over!";
        triesEl.textContent = "";
        inputEl.value = "";
        submitEl.textContent = "Try Again";
    }
    else {
        submitEl.textContent = "Submit";
    }
}


function inputValidation(input) {
    isValid = true;
    if ((input < 1 || input > 100)) {
        gameMsgEl.textContent = "Please only enter numbers from 1 to 100!";
        inputEl.value = "";
        isValid = false;
    }

    if (!input) {
        gameMsgEl.textContent = "Please enter a number!";
        inputEl.value = "";
        triesEl.textContent = "";
        isValid = false;
    }
}


function winMsg() {
    if (numOfTries > 6) {
        triesEl.textContent = `It only took you ${9 - numOfTries} tries. Amazing!`;
    }
    else {
        triesEl.textContent = `It took you ${9 - numOfTries} tries. Not bad I guess.`;
    }
    submitEl.textContent = "Play Again?";
    hasWon = true;
}


function arrayManip() {
    guessHistory.push(userInput);
    console.log(guessHistory);
}
