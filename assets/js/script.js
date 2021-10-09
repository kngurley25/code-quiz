// DOM elements from HTML
var startButtonEl = document.querySelector("#start-button");
var homePageEl = document.querySelector(".home-page");
var timerEl = document.querySelector("#timer");

var questionPageEl = document.querySelector(".question-page");
var questionEl = document.querySelector(".question");
var answerListEl = document.querySelector(".answer-list");
var answerOptionEl = document.querySelector(".answer-button");

var answerButtonEl = document.querySelector("#answer-button");

// hide initial question HTML elements before starting quiz
var state = questionPageEl.getAttribute("data-state");
    if (state === "hidden") {
        questionPageEl.style.display = "none";
    }

// function to keep a question page hidden until data state changes
var showHideQuestions = function () {
    var state = questionPageEl.getAttribute("data-state");
    if (state === "hidden") {
        questionPageEl.style.display = "none";
    }
    else {
        questionPageEl.style.display = "block";
    }
}

// function to start quiz
var startQuiz = function () {
    homePageEl.style.display = "none";
    quizTimer();
    questionPageEl.setAttribute("data-state","visible");
    showHideQuestions();
    quizQuestions();
}

// quiz timer
function quizTimer () {
    var count = 60;
    var timeInterval = setInterval(function () {
        if (count > 0) {
            timerEl.textContent = count;
            count--;
        } else {
            timerEl.textContent = "";
            clearInterval(timeInterval);
            //endGame();
        }
    }, 1000);
}

// questions array
var questionArray = [
    { question: "What is xxx",
        answers: {a: "abc", b: "bdc", c: "cde", d: "def"},
        correct: "a",
    },
    { question: "What is yyy",
        answers: {a: "abc", b: "bdc", c: "cde", d: "def"},
        correct: "b",
    },
    { question: "What is zzz",
        answers: {a: "abc", b: "bdc", c: "cde", d: "def"},
        correct: "c",
    },
    { question: "What is uuu",
        answers: {a: "abc", b: "bdc", c: "cde", d: "def"},
        correct: "d",
    }
];

// var quizQuestions = function () {
    
    
//     for (var i = 0; i < questionArray.length; i++) {
//         questionEl.textContent = questionArray.question;
//     }

// }

// event listener to hide opening home page and start quiz when start button is clicked
startButtonEl.addEventListener("click", startQuiz);


