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
    firstNum = [];
    operatorSign = [];
    secondNum = [];
});
// Create arrays to hold the numbers and operators when clicked
let firstNum = [];
let operatorSign = [];
let secondNum = [];
// Select operator buttons from an array
let operatorButtons = Array.from(document.querySelectorAll(".operator"));
// Iterate over the array to input operators
for (const button of operatorButtons) {
    button.addEventListener("click", () => {
        // Check the first time an operator is pressed
        if (firstNum.length === 0) {
            previewArea.textContent += button.textContent;
            firstNum.push(numberArea.textContent);
            operatorSign.push(button.textContent);
        }
        // Default procedure for chained operations
        else if (firstNum.length === 1) {
            let num1 = Number(firstNum[0]);
            let num2 = Number(numberArea.textContent);
            let operator = operatorSign[0];
            let result = operate(num1, operator, num2);
            firstNum.pop();
            firstNum.push(result);
            num1 = Number(firstNum[0]);
            operatorSign.pop();
            operatorSign.push(button.textContent);
            operator = operatorSign[0];
            previewArea.textContent = "";
            previewArea.textContent += num1 + operator;
            numberArea.textContent = "";
            numberArea.textContent += result;
        }
    });
}
// Select the equals button
let equalsButton = document.querySelector(".equals");
// Calculate the total for the operation
equalsButton.addEventListener("click", () => {
    if (previewArea.textContent === "0" && previewArea.textContent.length == 1) {
        previewArea.textContent += equalsButton.textContent;
    }
    if (numberArea.textContent !== "0" && secondNum.length === 0) {
        let num1 = Number(firstNum[0]);
        let operator = operatorSign[0];
        secondNum.push(numberArea.textContent);
        let num2 = Number(secondNum[0]);
        let equals = operate(num1, operator, num2);
        numberArea.textContent = "";
        numberArea.textContent += equals;
    }
    else {
        let num1 = Number(firstNum[0]);
        let operator = operatorSign[0];
        secondNum.push(numberArea.textContent);
        let num2 = Number(secondNum[0]);
        let equals = operate(num1, operator, num2);
        numberArea.textContent = "";
        numberArea.textContent += equals;
    }
});
// Create function to perform the operations based on the operator
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