let fahrenheit = document.querySelector("#fah");
let celcius = document.querySelector("#cel");
let kelvin = document.querySelector("#kel");

celcius.addEventListener("input", () => {
  let c = parseFloat(celcius.value);
  let f = (c * 9) / 5 + 32;
  let k = c + 273.15;
  fahrenheit.value = f;
  kelvin.value = k;
});

fahrenheit.addEventListener("input", () => {
  let f = parseFloat(fahrenheit.value);
  let c = ((f - 32) * 5) / 9;
  let k = ((f - 32) * 5) / 9 + 273.15;
  celcius.value = c.toFixed(2);
  kelvin.value = k.toFixed(2);
});

kelvin.addEventListener("input", () => {
  let k = parseFloat(kelvin.value);
  let c = k - 273.15;
  let f = ((k - 273.15) * 9) / 5 + 32;
  celcius.value = c;
  fahrenheit.value = f;
});
