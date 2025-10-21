let hexColors = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];
let body = document.querySelector("main");
let btn = document.querySelector("#btn");
let color = document.querySelector("#color");

btn.addEventListener("click", () => {
  let randomColor = "#";
  for (let i = 0; i < 6; i++) {
    randomColor += hexColors[getRandomColor()];
  }
  body.style.backgroundColor = randomColor;
  color.textContent = randomColor;
});

function getRandomColor() {
  return Math.floor(Math.random() * hexColors.length);
}
