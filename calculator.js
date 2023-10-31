// Select number area and preview area
let numberArea = document.querySelector(".number-area");
let previewArea = document.querySelector(".preview-area");
// Select all number buttons in an array
let numberButtons = Array.from(document.querySelectorAll(".num"));
// Iterate over the array to input numbers to the display areas
for (const button of numberButtons) {
    button.addEventListener("click", () => {
        let displayLength = numberArea.textContent.length;
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
});

