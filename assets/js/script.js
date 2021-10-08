// DOM elements from HTML
var startButtonEl = document.querySelector("#start-button");
var homePageEl = document.querySelector(".home-page");
var timerEl = document.querySelector("#timer");

var questionPageEl = document.querySelector(".question-page");
var questionEl = document.querySelector(".question");
var answerListEl = document.querySelector(".answer-list");
var answerOptionEl = document.querySelector(".answer-option");

var answerButtonEl = document.querySelector("#answer-button");

var state = questionPageEl.getAttribute("data-state");
if (state === "hidden") {
    questionPageEl.style.display = "none";
    console.log(state);
}

// function to start quiz
var startQuiz = function () {
    homePageEl.style.display = "none";
    quizTimer();
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



// event listener to hide opening home page and start quiz when start button is clicked
startButtonEl.addEventListener("click", startQuiz);


