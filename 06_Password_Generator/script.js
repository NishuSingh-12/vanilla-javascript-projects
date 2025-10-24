let passwordInput = document.querySelector("#password");
let copyEl = document.querySelector("#copy");
let lengthInput = document.querySelector("#length");
let uppercaseInput = document.querySelector("#uppercase");
let lowercaseInput = document.querySelector("#lowercase");
let numbersInput = document.querySelector("#numbers");
let symbolInput = document.querySelector("#symbols");
let generateBtn = document.querySelector("#btn");

const upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const lowerCase = "abcdefghijklmnopqrstuvwxyz";
const numbers = "0123456789";
const symbols = "!@#$%^&*()_+~`|}{[]:;?><,./-=";
let password = "";

function generatePassword() {
  const length = lengthInput.value;
  let chars = "";
  if (uppercaseInput.checked) chars += upperCase;
  if (lowercaseInput.checked) chars += lowerCase;
  if (numbersInput.checked) chars += numbers;
  if (symbolInput.checked) chars += symbols;

  if (chars === "") {
    alert("Please select at least one character type!");
    return;
  }
  let password = "";
  for (let i = 0; i < length; i++) {
    const randomIndex = Math.floor(Math.random() * chars.length);
    password += chars[randomIndex];
  }
  passwordInput.value = password;
}

generateBtn.addEventListener("click", generatePassword);

copyEl.addEventListener("click", () => {
  password = passwordInput.value;
  if (password) {
    navigator.clipboard.writeText(password);
    copyEl.classList.replace("fa-copy", "fa-check");
    copyEl.style.color = "#b7dfb9";

    setTimeout(() => {
      copyEl.classList.replace("fa-check", "fa-copy");
      copyEl.style.color = "";
    }, 2000);
  } else {
    alert("⚠️ Please generate a password first!");
  }
});
