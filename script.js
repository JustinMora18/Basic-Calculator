const buttonValues = ["AC", "+/-", "%", "÷", "7", "8", "9", "x", "4", "5", "6", "-", "1", "2", "3", "+", "0", ".", "="];
const rightSymbols = ["÷", "x", "-", "+", "="];
const topSymbol = ["AC", "+/-", "%"];
const nums = ["7","8","9","4","5","6","1","2","3","0","."];

const display = document.getElementById("display");

for (let i = 0; i < buttonValues.length; i++){
    let value = buttonValues[i];
    let button = document.createElement("button");
    button.innerText = value;

    // add buttons to calculator 
    document.getElementById("buttons").appendChild(button);
}
