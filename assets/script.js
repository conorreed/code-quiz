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
const questionOne = {A:"",B:"",C:"",D:""};
const questionTwo = {A:"",B:"",C:"",D:""};
const questionThree = {A:"",B:"",C:"",D:""};
const questionFour = {A:"",B:"",C:"",D:""};
const questionFive = {A:"",B:"",C:"",D:""};
const questionSix = {A:"",B:"",C:"",D:""};
const questionSeven = {A:"",B:"",C:"",D:""};
const questionEight = {A:"",B:"",C:"",D:""};
const questionNine = {A:"",B:"",C:"",D:""};
const questionTen = {A:"",B:"",C:"",D:""};


// Function to stop the timer
function stopTimer() {
  clearInterval(timerInterval);
}

// Function to end the quiz
function endQuiz() {
  // Display the score screen or any other actions you need to take when the quiz ends
}

// Example usage: Call startTimer() when you start the quiz
startTimer();
const quizDurationSeconds = 60;  
let timeRemaining = quizDurationSeconds;
let timerInterval;

// Function to start the timer
function startTimer() {
  // Update the timer every second
  timerInterval = setInterval(function() {
    // Display the time remaining
    document.getElementById('timer').textContent = `Time: ${timeRemaining}s`;

    // Check if the time has run out
    if (timeRemaining <= 0) {
      clearInterval(timerInterval);
      endQuiz();
    } else {
      // Decrease the time by 1 second
      timeRemaining--;
    }
  }, 1000);
}

// Function to stop the timer
function stopTimer() {
  clearInterval(timerInterval);
}

// Function to end the quiz
function endQuiz() {
  // Display the score screen or any other actions you need to take when the quiz ends
}

// Example usage: Call startTimer() when you start the quiz
startTimer();



//implement functionality for starting the timer

// present the questions
function showQuestion(){

}

//handling user answers
function checkAnswers(){

}

//subtracting time for incorrect answers
function subtractTime(){

}

//ending the game
function endGame(){

}

// allow user to save their initials and score
function saveScore(){

}