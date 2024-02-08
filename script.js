const rgbButton = document.querySelector(".rgb-button");
const hexButton = document.querySelector(".hex-button");
const rgbaButton = document.querySelector(".rgba-button");
const background = document.querySelector(".background");

//Kontrukturfunktion
function Color(r, g, b) {
  this.r = r; // name sätts till det värde vi skickar med när vi skapar instansen/objektet när vi kallar på konstrukturfunktion
  this.g = g;
  this.b = b;
}

//Skapa metoder
Color.prototype.rgb = function () {
  return `rgb${(this.r, this.g, this.b)}`;
};

Color.prototype.hex = function () {
  const hexValue = ((1 << 24) | (this.r << 16) | (this.g << 8) | this.b)
    .toString(16)
    .slice(1);
  return `#${hexValue}`;
};

Color.prototype.rgba = function (alpha) {
  return `rgba(${this.r}, ${this.g}, ${this.b}, ${alpha})`;
};

//Skapar instanser av objektet
const red = new Color(255, 0, 0); //Skapar instansen/objektet med dess grund
const green = new Color(0, 128, 0);
const blue = new Color(8, 143, 143);

console.log(red.hex());
console.log(green.hex());

rgbButton.addEventListener(
  "click",
  () => (background.style.background = red.rgb())
);
hexButton.addEventListener("click", () => green.hex());
rgbaButton.addEventListener("click", () => blue.rgba());
