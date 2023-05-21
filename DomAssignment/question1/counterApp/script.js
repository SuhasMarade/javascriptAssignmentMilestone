const incrementButton = document.getElementById("incrementBtn");
const decrementButton = document.getElementById("decrementBtn");
const resetButton = document.getElementById("resetBtn");
const displayVal = document.getElementById("dispayValue");

// function for decerment value
decrementButton.addEventListener("click", () => {
    const value = Number(displayVal.innerText);
    if(value > 0){
        displayVal.innerText = value - 1;
    }
    else{
        alert("Negative value not allowed");
    }
});
// funtion for increment value
incrementButton.addEventListener("click", () => {
    const value = Number(displayVal.innerText);
    if(value >= 10){
        alert("value more than 10 not allowed");
    }
    else{
        displayVal.innerText = value + 1;
    }
});

// function for reset button
resetButton.addEventListener("click", () => {
    displayVal.innerText = 0;
});