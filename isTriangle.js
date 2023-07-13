const inputAngles = document.querySelectorAll(".input-angles");
const outputDiv = document.querySelector("#output");
const isTriangleBtn = document.querySelector("#is-triangle-btn");

function calculateSumOfAngles(angle1, angle2, angle3) {
  const sumOfAngles = Number(angle1 + angle2 + angle3);
  return sumOfAngles;
}

function isTriangle() {
  const anglesArray = [
    inputAngles[0].value,
    inputAngles[1].value,
    inputAngles[2].value,
  ];

  const sumOfAngles = calculateSumOfAngles(
    Number(anglesArray[0]),
    Number(anglesArray[1]),
    Number(anglesArray[2])
  );
  if (sumOfAngles === 180) {
    outputDiv.innerText = `yay , the angles forms a triangle`;
  } else {
    outputDiv.innerText = `oh no! the ${sumOfAngles} angle don't form the Triangle`;
  }
}

isTriangleBtn.addEventListener("click", isTriangle);
