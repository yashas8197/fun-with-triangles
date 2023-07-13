const quizForm = document.querySelector(".quiz-form");
const submitAnswerBtn = document.querySelector("#submit-answer-btn");
const quizOutput = document.querySelector("#quiz-output");

const correctAnswer = ["90°", "right angled"];

function calculateScore(event) {
  event.preventDefault();
  let score = 0;
  let index = 0;
  let formResults = new FormData(quizForm);
  for (let value of formResults.values()) {
    if (value === correctAnswer[index]) {
      score++;
    }
    index++;
  }
  quizOutput.innerText = `you have scorerd ${score}`;
}

submitAnswerBtn.addEventListener("click", calculateScore);
