const buttonValues = ["AC", "+/-", "%", "÷", "7", "8", "9", "x", "4", "5", "6", "-", "1", "2", "3", "+", "0", ".", "="];
const rightSymbols = ["÷", "x", "-", "+", "="];
const topSymbol = ["AC", "+/-", "%"];
const nums = ["7","8","9","4","5","6","1","2","3","0","."];

const display = document.getElementById("display");
const toggle = document.getElementById("tgglBttn");
const buttonContainer = document.querySelector(".button-container");

// A+B, A-B, A*B, A/B
let A = 0;
let operator = null;
let B = null;

function clearAll(){
    A = 0;
    B = null;
    operator = null;
}

function applyButtonStyles() {
    const isDarkMode = localStorage.getItem("darkMode-frstSect") === "true";
    const buttons = document.querySelectorAll("#buttons button");
    const isMobile = window.innerWidth < 480;

    buttons.forEach(button => {
        const value = button.innerText;

        // Reset any previous styles
        button.style = "";

        if (value == "0") {
            if (!isMobile) {
                button.style.width = "100%";
                button.style.gridColumn = "span 2";
            } else {
                button.style.width = "100%";
                button.style.gridColumn = "span 2";
            }
        }

        if (nums.includes(value)) {
            button.style.backgroundColor = isDarkMode ? "#1E1E1E" : "#EFF5FF";
            button.style.borderBottom = isDarkMode ? "solid 8px #000000" : "solid 8px #8F939B";
            button.style.color = isDarkMode ? "#EEF6FF" : "#1E1E1E"
        }

        if (rightSymbols.includes(value)) {
            button.style.backgroundColor = isDarkMode ? "#54BC4C" : "#6860FF";
            button.style.borderBottom = isDarkMode ? "solid 8px #35832F" : "solid 8px #433EAC";
            button.style.color = isDarkMode ? "#1E1E1E" : "#EFF5FF";
        }
        
        else if (topSymbol.includes(value)) {
            button.style.backgroundColor = isDarkMode ? "#6D8767" : "#5E5C86";
            button.style.borderBottom = isDarkMode ? "solid 8px #4D5B4A" : "solid 8px #4A4773";
            button.style.color = isDarkMode ? "#1E1E1E" : "#EFF5FF";
        }
    });
}

for (let i = 0; i < buttonValues.length; i++){
    let value = buttonValues[i];
    let button = document.createElement("button");
    button.innerText = value;
    
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

applyButtonStyles();

// call applyButtonStyles also when windows size changes
window.addEventListener("resize", applyButtonStyles);

// Keeps the dark mode color when it's active and the page is refreshed
window.addEventListener("DOMContentLoaded", () => {
    const isDarkMode = localStorage.getItem("darkMode-frstSect") === "true";
    toggle.checked = isDarkMode;
    
    const firstSection = document.querySelector("section.lightMode-frstSect");
    if (firstSection) {
        firstSection.classList.toggle("darkMode-frstSect", isDarkMode);
    }

    if (isDarkMode) {
        buttonContainer.style.backgroundColor = "#c4c4c4a5";
    } else {
        buttonContainer.style.backgroundColor = "#292828b4";
    }

    applyButtonStyles();
});

 // toggle button
toggle.addEventListener("change", () => {
    // keeps the color
    const firstSection = document.querySelector("section.lightMode-frstSect");
    if (firstSection) {
        firstSection.classList.toggle("darkMode-frstSect", toggle.checked);
    }
    localStorage.setItem("darkMode-frstSect", toggle.checked);

    // toggle button color change
    if (toggle.checked) {
        buttonContainer.style.backgroundColor = "#c4c4c4a5";
    } 
    else {
        buttonContainer.style.backgroundColor = "#292828b4";
    }
    applyButtonStyles();
});

