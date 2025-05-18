const buttonValues = ["AC", "+/-", "%", "÷", "7", "8", "9", "x", "4", "5", "6", "-", "1", "2", "3", "+", "0", ".", "="];
const rightSymbols = ["÷", "x", "-", "+", "="];
const topSymbol = ["AC", "+/-", "%"];
const nums = ["7","8","9","4","5","6","1","2","3","0","."];

const display = document.getElementById("display");

// A+B, A-B, A*B, A/B
let A = 0;
let operator = null;
let B = null;

function clearAll(){
    A = 0;
    B = null;
    operator = null;

}

for (let i = 0; i < buttonValues.length; i++){
    let value = buttonValues[i];
    let button = document.createElement("button");
    button.innerText = value;
    
    // styling the buttons 
        if (value == "0"){
        button.style.width = "14.66rem";
        button.style.gridColumn = "span 2";
        }
        if (nums.includes(value)){
            button.style.borderBottom = "solid 8px #8F939B";
        }
        if (rightSymbols.includes(value)){
            button.style.backgroundColor = "#6860FF";
            button.style.borderBottom = "solid 8px #433EAC";
            button.style.color = "#EFF5FF";
        } else if (topSymbol.includes(value)){
            button.style.backgroundColor = "#5E5C86";
            button.style.borderBottom = "solid 8px #4A4773";
            button.style.color = "#EFF5FF";
        }
    
        // button clicks
        button.addEventListener("click", function() {
            if (display.value === "Error" && value !== "AC") return;
            if (rightSymbols.includes(value)){
                if (value == "="){
                    if (A != null){
                        B = display.value;
                        let numA = Number(A);
                        let numB = Number(B);

                        if (operator == "÷"){
                            if (numB === 0){
                                display.value = "Error";
                                clearAll();
                            } else {
                                display.value = numA/numB;
                                clearAll();
                            }
                        }                        
                        else if (operator == "x"){
                            display.value = numA*numB;
                        }
                        else if (operator == "-"){
                            display.value = numA-numB;
                        }
                        else if (operator == "+"){
                            display.value = numA+numB;
                        }
                        clearAll();
                    }
                }
                else {
                    operator = value;
                    A = display.value;
                    display.value = "";
                }
            }
            else if (topSymbol.includes(value)){
                if (value === "AC"){
                    clearAll();
                    display.value = "";
                }
                else if (value === "+/-"){
                    if (display.value !== "" && display.value !== "0"){
                        //remove the -
                        if (display.value[0] === "-"){
                            display.value = display.value.slice(1);
                        }
                        else {
                            display.value = "-" + display.value;
                        }
                    }
                    
                }
                else if (value === "%"){
                    display.value = Number(display.value)/100;
                }
            } 
            else { //num or . 
                if (value === "."){
                    if (display.value !== "" && !display.value.includes(".")){
                        display.value += ".";
                    }
                }
                else if (display.value === "0"){
                    display.value = value;
                }
                else {
                    display.value += value;
                }
            }
        });
    
    // add buttons to calculator 
    document.getElementById("buttons").appendChild(button);
}