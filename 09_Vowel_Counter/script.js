let teaxtarea = document.querySelector("#teaxtarea");
let countBtn = document.querySelector("#vowelCounter");
let output = document.querySelector("#output");

countBtn.addEventListener("click", () => {
  const val = teaxtarea.value.trim();
  if (val === "") {
    output.innerText = "Please enter text first";
    output.style.color = "red";
    return;
  }
  const vowels = "aeiou";
  let count = 0;
  for (char of val.toLowerCase()) {
    if (vowels.includes(char)) count++;
  }
  output.innerText = `The number of vowels are: ${count}`;
  output.style.color = "black";
});
