let colors = ["Green", "Red", "Yellow", "Pink", "Cyan", "Orange"];
let color = document.querySelector("#color");
let btn = document.querySelector("#btn");
let body = document.querySelector("main");

btn.addEventListener("click", () => {
  let randomColor = getRandomColor();
  body.style.backgroundColor = colors[randomColor];
  color.textContent = colors[randomColor];
});

function getRandomColor() {
  return Math.floor(Math.random() * colors.length);
}
