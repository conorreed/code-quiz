//GIVEN I am taking a code quiz
// WHEN I click the start button
// THEN a timer starts and I am presented with a question
// WHEN I answer a question
// THEN I am presented with another question
// WHEN I answer a question incorrectly
// THEN time is subtracted from the clock
// WHEN all questions are answered or the timer reaches 0
// THEN the game is over
// WHEN the game is over
// THEN I can save my initials and score

//create any necessary global variables

const data = [
  {
    question: "How many legs does a cat have?", // stuff into question-text element
    choices: [
      // create the li elements on the fly, depending on how many choices are in the object
      "One",
      "Two",
      "Three",
      "Four",
    ],
    correctAnswer: "Four",
    userAnswer: "",
  },
  {
    question: "How many legs does a dog have?",
    choices: ["Three", "Four"],
    correctAnswer: "Four",
    userAnswer: "",
  },
  {
    question: "How many legs does a spider have?",
    choices: ["Three", "Six", "Eight"],
    correctAnswer: "Eight",
    userAnswer: "",
  },
];

let currentIndex = 0; // current question in the data
const quizDurationSeconds = 60;
let elapsedSeconds = 0; 

// define functions

// present the questions
function showQuestion(currentItem) {
  document.getElementById("start-screen").style.display = "none";
  document.getElementById("question-screen").style.display = "block";
  document.getElementById("question-text").textContent = currentItem.question;

  const ul = document.getElementById("answer-choices");

  let child = ul.lastElementChild;
  while (child) {
    ul.removeChild(child);
    child = ul.lastElementChild;
  }

  for (let index = 0; index < currentItem.choices.length; index++) {
    const li = document.createElement("li");
    const button = document.createElement("button");
    button.textContent = currentItem.choices[index];
    button.className = "choice";
    li.appendChild(button);
    ul.appendChild(li);
    button.addEventListener("click", () => saveAnswer(button.textContent));
  }
}

// score the quiz and show results
function showScore() {
  document.getElementById("question-screen").style.display = "none";
  document.getElementById("score-screen").style.display = "block";

  const correctAnswers = data.filter(question => question.correctAnswer === question.userAnswer).length;

  document.getElementById(
    "final-score"
  ).textContent = `${correctAnswers} out of ${data.length}`;

}

// update data with the user's answer
function saveAnswer(answer) {
  const item = data[currentIndex];
  item.userAnswer = answer;

  if (item.userAnswer !== item.correctAnswer) {
    elapsedSeconds += 10;
  }

  if ((currentIndex === data.length - 1)) {
    showScore()
  } else {
    currentIndex++;
    showQuestion(data[currentIndex]);
  }
}

// Function to start the timer
function startTimer() {
  // Update the timer every second

  timerInterval = setInterval(function () {
    // Display the time remaining

    elapsedSeconds++;

    let secondsRemaining = quizDurationSeconds - elapsedSeconds;

    document.getElementById(
      "timer"
    ).textContent = `Seconds Remaining: ${secondsRemaining}`;

    // Check if the time has run out

    if (secondsRemaining <= 0) {
      clearInterval(timerInterval);
      showScore();
    }
  }, 1000);
}

function startQuiz() {
  startTimer();
  showQuestion(data[currentIndex]);
}

const startButton = document.getElementById("start-button");
startButton.addEventListener("click", startQuiz);
