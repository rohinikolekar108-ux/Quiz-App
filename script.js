const quizData = [
  {
    question: "What does HTML stand for?",
    options: [
      "Hyper Text Markup Language",
      "High Text Machine Language",
      "Hyperlinks Text Mark Language",
      "None of these"
    ],
    answer: 0
  },
  {
    question: "Which language is used for styling web pages?",
    options: ["HTML", "JQuery", "CSS", "XML"],
    answer: 2
  },
  {
    question: "Which is a JavaScript framework?",
    options: ["React", "Laravel", "Django", "Flask"],
    answer: 0
  }
];

let currentQuestion = 0;
let score = 0;

const questionEl = document.getElementById("question");
const optionsEl = document.getElementById("options");
const submitBtn = document.getElementById("submitBtn");
const nextBtn = document.getElementById("nextBtn");
const resultEl = document.getElementById("result");
const progressEl = document.getElementById("progress");

loadQuestion();

function loadQuestion() {
  const q = quizData[currentQuestion];
  questionEl.textContent = q.question;
  progressEl.textContent = `Question ${currentQuestion + 1} of ${quizData.length}`;

  optionsEl.innerHTML = "";
  q.options.forEach((option, index) => {
    optionsEl.innerHTML += `
      <label>
        <input type="radio" name="option" value="${index}">
        ${option}
      </label>
    `;
  });
}

submitBtn.addEventListener("click", () => {
  const selected = document.querySelector('input[name="option"]:checked');
  if (!selected) {
    alert("Please select an option");
    return;
  }

  if (parseInt(selected.value) === quizData[currentQuestion].answer) {
    score++;
  }

  submitBtn.classList.add("hidden");
  nextBtn.classList.remove("hidden");
});

nextBtn.addEventListener("click", () => {
  currentQuestion++;

  if (currentQuestion < quizData.length) {
    loadQuestion();
    submitBtn.classList.remove("hidden");
    nextBtn.classList.add("hidden");
  } else {
    showResult();
  }
});

function showResult() {
  questionEl.textContent = "Quiz Completed 🎉";
  optionsEl.innerHTML = "";
  progressEl.textContent = "";

  resultEl.classList.remove("hidden");
  resultEl.textContent = `Your Score: ${score} / ${quizData.length}`;

  submitBtn.style.display = "none";
  nextBtn.style.display = "none";
}
