// DOM elements from HTML
var startButtonEl = document.querySelector("#start-button");
var homePageEl = document.querySelector(".home-page");
var timerEl = document.querySelector("#timer");

var questionPageEl = document.querySelector(".question-page");
var questionEl = document.querySelector(".question");
var answerListEl = document.querySelector(".answer-list");
var answerOneEl = document.querySelector("#answer-button-one");
var answerTwoEl = document.querySelector("#answer-button-two");
var answerThreeEl = document.querySelector("#answer-button-three");
var answerFourEl = document.querySelector("#answer-button-four");

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
var questionCounter = 0;
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

var quizQuestions = function () {

    var questionAnswer = [];
    var question = [];
    questionAnswer.push(questionArray[questionCounter]);
    question.push(questionArray[questionCounter].question);
    //console.log(questionAnswer);

    questionEl.textContent = question;
    //console.log(questionEl);

    var answers = [];
    answers.push(questionArray[questionCounter].answers);
    console.log(answers);
    
    for (var i = 0; i < questionAnswer.length; i++) {
        answers.push(questionAnswer[i].answers);

        answerOneEl.textContent = questionAnswer[i].answers.a;
        answerTwoEl.textContent = questionAnswer[i].answers.b;
        answerThreeEl.textContent = questionAnswer[i].answers.c;
        answerFourEl.textContent = questionAnswer[i].answers.d;

    }
    questionCounter++;
}

// event listener to hide opening home page and start quiz when start button is clicked
startButtonEl.addEventListener("click", startQuiz);


