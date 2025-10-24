let inputEl = document.querySelector("#input");
let outputEl = document.querySelector("#output");
let btn = document.querySelector("#convert-btn");

btn.addEventListener("click", () => {
  let value = parseFloat(inputEl.value);
  if (isNaN(value)) {
    outputEl.innerText = "Please enter a valid number";
    outputEl.style.color = "#ff9800";
    return;
  }
  let pounds = value * 2.205;
  outputEl.innerText = pounds.toFixed(2) + " lbs";
  outputEl.style.color = "#357a38";
});
inputEl.addEventListener("focus", () => {
  outputEl.innerText = "";
  inputEl.value = "";
});
