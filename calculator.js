// Select number area and preview area
let numberArea = document.querySelector(".number-area");
let previewArea = document.querySelector(".preview-area");
// Select all number buttons in an array
let numberButtons = Array.from(document.querySelectorAll(".num"));
// Iterate over the array to input numbers to the display areas
for (const button of numberButtons) {
    button.addEventListener("click", () => {
        if (isNaN(previewArea.textContent.charAt(previewArea.textContent.length - 1))) {
            numberArea.textContent = "";
        }
        if (numberArea.textContent === "0") {
            numberArea.textContent = "";
            previewArea.textContent = "";
            numberArea.textContent += button.textContent;
            previewArea.textContent += button.textContent;
        }
        else {
            numberArea.textContent += button.textContent;
            previewArea.textContent += button.textContent;
        }
        // Set the max length of the display areas to 10 digits
        numberArea.textContent = numberArea.textContent.substring(0, 10);
        previewArea.textContent = previewArea.textContent.substring(0, 10);
    });
}

// Clear the display areas back to 0
let clearButton = document.querySelector(".clear");
clearButton.addEventListener("click", () => {
    numberArea.textContent = "0";
    previewArea.textContent = "0";
    sequence = [];
});

let sequence = [];
let operatorButtons = Array.from(document.querySelectorAll(".operator"));
for (const button of operatorButtons) {
    button.addEventListener("click", () => {
        previewArea.textContent += button.textContent;
        sequence.push(numberArea.textContent);
        sequence.push(button.textContent);
        if (isNaN(sequence[-1]) && sequence.length != 2) {
            previewArea.textContent = previewArea.textContent.slice(0, -2);
            previewArea.textContent += button.textContent;
            sequence = [];
            sequence.push(numberArea.textContent);
            sequence.push(button.textContent);
            console.log(sequence);
        }
    });
};

let equalsButton = document.querySelector(".equals");
equalsButton.addEventListener("click", () => {
    if (previewArea.textContent === "0" && previewArea.textContent.length == 1) {
        previewArea.textContent += equalsButton.textContent;
    }
    sequence.push(numberArea.textContent);
    if (numberArea.textContent !== "0") {
        let num1 = Number(sequence[0]);
        let operator = sequence[1];
        let num2 = Number(sequence[2]);
        let result = operate(num1, operator, num2);
        numberArea.textContent = "";
        numberArea.textContent += result;
    }
});

function operate(num1, operator, num2) {
    switch (operator) {
        case "+":
            return Number(num1) + Number(num2);
        case "-":
            return Number(num1) - Number(num2);
        case "*":
            return Number(num1) * Number(num2);
        case "/":
            if (num2 == 0) {
                return "Error";
            }
            else {
                return Number(num1) / Number(num2);
            }
    }
}
