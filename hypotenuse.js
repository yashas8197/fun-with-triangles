const sideInput = document.querySelectorAll(".side-input");
const hypotenuseBtn = document.querySelector("#hypotenuse-btn");
const outputDiv = document.querySelector("#output-hypo");

function calculateSumOfSquare(a, b) {
  const sumOfSquares = a ** 2 + b ** 2;
  return sumOfSquares;
}

function calculateHypotenuse() {
  const sumOfSquares = calculateSumOfSquare(
    Number(sideInput[0].value),
    Number(sideInput[1].value)
  );
  const lengthOfHypo = Math.sqrt(sumOfSquares);
  outputDiv.innerText = `The Hypotenuse is  ${lengthOfHypo}`;
}

hypotenuseBtn.addEventListener("click", calculateHypotenuse);
