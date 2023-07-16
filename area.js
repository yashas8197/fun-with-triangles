const lenInput = document.querySelectorAll(".len-input");
const areaBtn = document.querySelector("#area-btn");
const outputArea = document.querySelector("#output-area");

function calculateBaseMulHeight(base, height) {
  const baseIntoHeight = base * height;
  return baseIntoHeight;
}

function calculateArea() {
  const base = lenInput[0].value;
  const height = lenInput[1].value;
  const heightIntoBase = calculateBaseMulHeight(base, height);

  const areaOfTriangle = heightIntoBase / 2;
  outputArea.innerText = `The area of a Triangle is ${areaOfTriangle}`;
}

areaBtn.addEventListener("click", calculateArea);
