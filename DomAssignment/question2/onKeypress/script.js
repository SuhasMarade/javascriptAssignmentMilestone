

const inputBox = document.getElementById('inputBox');
const display =  document.getElementById('display');

inputBox.addEventListener("keypress", function(x){
    display.innerText = "You have pressed " + x.key;
});