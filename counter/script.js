const decreaseBtn = document.getElementById("decrease");
const increaseBtn = document.getElementById("increase");
const resetBtn = document.getElementById("reset");
const counterDisplay = document.getElementById("counter");
let count = 0;

decreaseBtn.onclick = function() {
    count--;
    counterDisplay.textContent = count;
}

increaseBtn.onclick = function() {
    count++;
    counterDisplay.textContent = count;
}

resetBtn.onclick = function() {
    count = 0;
    counterDisplay.textContent = count;
}
