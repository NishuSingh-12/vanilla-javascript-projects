const quizData = [
  {
    question: "1. What is the full form of JS?",
    options: ["JavaSyntax", "JavaScript", "JustScript", "JScript"],
    correct: "JavaScript",
  },
  {
    question: "2. Which symbol is used for comments in JavaScript?",
    options: ["//", "/* */", "#", "<!-- -->"],
    correct: "//",
  },
  {
    question: "3. Inside which HTML element do we put JavaScript code?",
    options: ["<js>", "<javascript>", "<script>", "<code>"],
    correct: "<script>",
  },
  {
    question: "4. Which method is used to display data in the console?",
    options: ["log()", "console.log()", "alert()", "write()"],
    correct: "console.log()",
  },
  {
    question: "5. Which keyword is used to declare a variable in JavaScript?",
    options: ["var", "let", "const", "All of the above"],
    correct: "All of the above",
  },
  {
    question: "6. What is the output of 2 + '2' in JavaScript?",
    options: ["4", "'22'", "NaN", "undefined"],
    correct: "'22'",
  },
  {
    question: "7. Which of the following is NOT a JavaScript data type?",
    options: ["String", "Boolean", "Float", "Number"],
    correct: "Float",
  },
  {
    question: "8. How do you write an alert box in JavaScript?",
    options: [
      "msg('Hello')",
      "alert('Hello')",
      "message('Hello')",
      "popup('Hello')",
    ],
    correct: "alert('Hello')",
  },
  {
    question: "9. Which operator is used to assign a value to a variable?",
    options: ["-", "=", "==", "==="],
    correct: "=",
  },
  {
    question: "10. How do you create a function in JavaScript?",
    options: [
      "function myFunction() {}",
      "def myFunction() {}",
      "create myFunction() {}",
      "function:myFunction() {}",
    ],
    correct: "function myFunction() {}",
  },
];
let question = document.querySelector("#question");
let optionA = document.querySelector("#text-option-a");
let optionB = document.querySelector("#text-option-b");
let optionC = document.querySelector("#text-option-c");
let optionD = document.querySelector("#text-option-d");
let submitBtn = document.querySelector("#submit-btn");
let scoreEl = document.querySelector("#score");

let currentQuestion = 0;
let score = 0;
question.textContent = quizData[currentQuestion].question;
optionA.textContent = quizData[currentQuestion].options[0];
optionB.textContent = quizData[currentQuestion].options[1];
optionC.textContent = quizData[currentQuestion].options[2];
optionD.textContent = quizData[currentQuestion].options[3];

submitBtn.addEventListener("click", () => {
  const checkedOption = document.querySelector('input[type="radio"]:checked');
  if (checkedOption === null) {
    alert("Please select an answer");
  } else if (
    checkedOption.nextElementSibling.textContent ===
    quizData[currentQuestion].correct
  ) {
    score++;
  }
  checkedOption.checked = false;
  currentQuestion++;
  if (currentQuestion < quizData.length) {
    question.textContent = quizData[currentQuestion].question;
    optionA.textContent = quizData[currentQuestion].options[0];
    optionB.textContent = quizData[currentQuestion].options[1];
    optionC.textContent = quizData[currentQuestion].options[2];
    optionD.textContent = quizData[currentQuestion].options[3];
  } else {
    alert(`your score ${score} out of ${quizData.length}`);
    location.reload();
  }
});
