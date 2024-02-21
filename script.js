const rgbButton = document.querySelector(".rgb-button");
const hexButton = document.querySelector(".hex-button");
const rgbaButton = document.querySelector(".rgba-button");
const background = document.querySelector(".background");

// Konstrukturfunktion
function Color(r, g, b) {
  this.r = r;
  this.g = g;
  this.b = b;
}

// Metoder
Color.prototype.rgb = function () {
  return `rgb(${this.r}, ${this.g}, ${this.b})`;
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

// Instanser av objektet
const yellow = new Color(232, 186, 58);
const green = new Color(17, 120, 36);
const blue = new Color(8, 143, 143);

rgbButton.addEventListener(
  "click",
  () => (background.style.background = yellow.rgb())
);
hexButton.addEventListener(
  "click",
  () => (background.style.background = green.hex())
);
rgbaButton.addEventListener(
  "click",
  () => (background.style.background = blue.rgba(0.4))
);
