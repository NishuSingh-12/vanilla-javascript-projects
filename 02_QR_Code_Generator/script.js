let inputVal = document.querySelector("#input");
let btn = document.querySelector("#btn");
let img = document.querySelector("#image");

btn.addEventListener("click", () => {
  let value = inputVal.value;
  if (!value) {
    alert("Enter valid URL");
  } else {
    img.src = `https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=${value}`;
    img.alt = `QR code ${value}`;
  }
  inputVal.value = "";
});
