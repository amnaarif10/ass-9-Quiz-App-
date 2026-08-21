const questions = [
  {
    q: "Which tag is used to create a line break in HTML?",
    answers: ["<lb>", "<break>", "<br>", "<p>"],
    correct: 2
  },
  {
    q: "Which element is used to insert an image?",
    answers: ["<img>", "<image>", "<pic>", "<src>"],
    correct: 0
  },
  {
    q: "Which tag is used for bulleted lists?",
    answers: ["<ol>", "<ul>", "<li>", "<list>"],
    correct: 1
  },
  {
    q: "What is the correct tag for the main title?",
    answers: ["<title>", "<h1>", "<head>", "<header>"],
    correct: 1
  },
  {
    q: "Which attribute sets the URL for a link?",
    answers: ["src", "link", "href", "target"],
    correct: 2
  },
  {
    q: "Which property changes the background color in CSS?",
    answers: ["bgcolor", "color", "background-color", "canvas-color"],
    correct: 2
  },
  {
    q: "How do you style a class named 'btn' in CSS?",
    answers: ["#btn", ".btn", "*btn", "@btn"],
    correct: 1
  },
  {
    q: "How do you create a pop-up alert box in JS?",
    answers: ["msg('Hello')", "alert('Hello')", "popup('Hello')", "console.alert('Hello')"],
    correct: 1
  },
  {
    q: "Which operator assigns a value to a variable?",
    answers: ["=", "==", "===", "->"],
    correct: 0
  },
  {
    q: "What data type is true or false?",
    answers: ["String", "Number", "Boolean", "Array"],
    correct: 2
  }
];

let currentQuestion = 0;
let score = 0;

function startQuiz() {
  const welcomePage = document.getElementById("welcome-page");
  const quizPage = document.getElementById("quiz-page");
  
  welcomePage.className = "hide";
  quizPage.className = "";
  
  currentQuestion = 0;
  score = 0;
  
  loadQuestion();
}

function loadQuestion() {
  const btn1 = document.getElementsByClassName("choice-btn")[0];
  const btn2 = document.getElementsByClassName("choice-btn")[1];
  const btn3 = document.getElementsByClassName("choice-btn")[2];
  const btn4 = document.getElementsByClassName("choice-btn")[3];
  
  const allButtons = document.getElementsByClassName("choice-btn");
  

  for (let i = 0; i < allButtons.length; i++) {
    allButtons[i].className = "choice-btn";
    allButtons[i].disabled = false;
  }

  document.getElementById("result-msg").innerText = "";
  document.getElementById("next-button").className = "blue-btn hide";

  const questionItem = questions[currentQuestion];
  
  document.getElementById("counter").innerText = "Question " + (currentQuestion + 1) + " of 10";
  document.getElementById("my-question").innerText = questionItem.q;


  btn1.innerText = "A) " + questionItem.answers[0];
  btn2.innerText = "B) " + questionItem.answers[1];
  btn3.innerText = "C) " + questionItem.answers[2];
  btn4.innerText = "D) " + questionItem.answers[3];
}

function checkAnswer(chosenIndex) {
  const allButtons = document.getElementsByClassName("choice-btn");
  const correctAnswerIndex = questions[currentQuestion].correct;

 
  for (let i = 0; i < allButtons.length; i++) {
    allButtons[i].disabled = true;
  }

 
  if (chosenIndex === correctAnswerIndex) {
    allButtons[chosenIndex].className = "choice-btn right";
    document.getElementById("result-msg").innerText = "Correct! 🎉";
    score = score + 1;
  } else {
    allButtons[chosenIndex].className = "choice-btn wrong";
    allButtons[correctAnswerIndex].className = "choice-btn right";
    document.getElementById("result-msg").innerText = "Wrong! ❌";
  }

  document.getElementById("next-button").className = "blue-btn";
}

function nextQuestion() {
  currentQuestion = currentQuestion + 1;

  if (currentQuestion < 10) {
    loadQuestion();
  } else {
    showResults();
  }
}

function showResults() {
  const quizPage = document.getElementById("quiz-page");
  const resultPage = document.getElementById("result-page");
  
  quizPage.className = "hide";
  resultPage.className = "";
  
  document.getElementById("my-score").innerText = score;

  
  if (score >= 8) {
    document.getElementById("final-message").innerText = "Great job! Keep coding!";
  } else if (score >= 5) {
    document.getElementById("final-message").innerText = "Nice try! Keep practicing!";
  } else {
    document.getElementById("final-message").innerText = "Don't give up! Try again!";
  }
}

function restartQuiz() {
  const resultPage = document.getElementById("result-page");
  resultPage.className = "hide";
  
  startQuiz();
}