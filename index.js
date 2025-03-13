let p = 1000,
  r = 8,
  t = 25,
  n = 12;

let ans = Math.pow(1 + (r * 0.01) / n, n * t);
let c = (r * 0.01) / n;
let fv = p * (((ans - 1) / c) * (1 + c));

console.log(fv);
const slider = document.getElementById("myRange");
const sliderValue = document.getElementById("sliderValue");
const sliderDisplay = document.getElementById("sliderDisplay");

// Update both the textbox and the span when slider is moved
slider.addEventListener("input", function () {
  sliderValue.value = slider.value; // Update input field
  sliderDisplay.textContent = slider.value; // Update span next to slider
});

// Allow manual input in the textbox to update the slider
sliderValue.addEventListener("input", function () {
  let newValue = parseInt(sliderValue.value);
  if (!isNaN(newValue) && newValue >= slider.min && newValue <= slider.max) {
    slider.value = newValue;
    sliderDisplay.textContent = newValue;
  }
});

