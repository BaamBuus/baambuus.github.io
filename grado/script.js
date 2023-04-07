// Selecting elements
const startColorInput = document.querySelector("#start-color");
const endColorInput = document.querySelector("#end-color");
const directionSelect = document.querySelector("#direction");
const previewDiv = document.querySelector("#preview");
const cssCodeTextarea = document.querySelector("#css-code");
const generateButton = document.querySelector("#generate-btn");

// Initializing default gradient values
let startColor = "#ff0000";
let endColor = "#ffff00";
let direction = "to right";

// Function to update gradient and CSS code
function updateGradient() {
    let gradient = `linear-gradient(${direction}, ${startColor}, ${endColor})`;
    previewDiv.style.background = gradient;
    cssCodeTextarea.value = `background: ${gradient};`;
}

// Function to update color values
function updateColorValues() {
    startColor = startColorInput.value;
    endColor = endColorInput.value;
    updateGradient();
}

// Function to update direction value
function updateDirection() {
    direction = directionSelect.value;
    updateGradient();
}

// Adding event listeners
startColorInput.addEventListener("input", updateColorValues);
endColorInput.addEventListener("input", updateColorValues);
directionSelect.addEventListener("change", updateDirection);
generateButton.addEventListener("click", updateGradient);

// Initializing the gradient on page load
updateGradient();