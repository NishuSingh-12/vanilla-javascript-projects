let password = document.querySelector("#password");
let message = document.querySelector("#message");
let progressBar = document.querySelector("#progressBar");

password.addEventListener("input", () => {
  let value = password.value;
  let strength = 0;
  if (value.length >= 8) strength++;
  if (/[A-Z]/.test(value)) strength++;
  if (/[a-z]/.test(value)) strength++;
  if (/[0-9]/.test(value)) strength++;
  if (/[@$!%*?&]/.test(value)) strength++;

  progressBar.style.width = `${(strength / 5) * 100}%`;

  if (strength <= 2) {
    message.innerText = `Weak password 😕`;
    message.style.color = "red";
    progressBar.style.backgroundColor = "red";
  } else if (strength === 3 || strength === 4) {
    message.innerText = `Medium strength 🙂`;
    message.style.color = "orange";
    progressBar.style.backgroundColor = "orange";
  } else {
    message.innerText = `Strong strength 💪`;
    message.style.color = "green";
    progressBar.style.backgroundColor = "green";
  }
});
