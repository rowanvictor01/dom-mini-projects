let num1 = document.getElementById("num1");
let num2 = document.getElementById("num2");
let btn = document.getElementById("btn");
let specialMsg = document.getElementById("special-msg");
let streak = 0;

btn.onclick = function() {
    const randomNum1 = Math.floor(Math.random() * 6 + 1);
    const randomNum2 = Math.floor(Math.random() * 6 + 1);

    num1.textContent = randomNum1;
    num2.textContent = randomNum2;


    if (randomNum1 === randomNum2) {
        specialMsg.textContent = "Wow, A Double Number! Lucky You!";
        streak++;
        if (streak > 1) {
            specialMsg.textContent = "Woah, Another one!";
        }
    }
    else {
        specialMsg.textContent = " ";
        streak = 0;
    }
}

