// DOM elements from HTML
var startButtonEl = document.querySelector("#start-button");
var homePageEl = document.querySelector(".home-page");
var timerEl = document.querySelector("#timer");

var questionPageEl = document.querySelector(".question-page");
var questionEl = document.querySelector(".question");

var answerAEl = document.querySelector("#answer-button-a");
var answerBEl = document.querySelector("#answer-button-b");
var answerCEl = document.querySelector("#answer-button-c");
var answerDEl = document.querySelector("#answer-button-d");



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
var count = 59;
var quizTimer = function quizTimer () {
    var timeInterval = setInterval(function () {
        if (count >= 1 && questionCounter < questionArray.length) {
            timerEl.textContent = count;
            count--;
        } else {
            timerEl.textContent = "End Game";
            clearInterval(timeInterval);
        }
    }, 1000);
}

// questions array
var questionCounter = 0;
var questionArray = [
    { question: "What is q1",
        answers: {a: "q1a1", b: "q1a2", c: "q1a3", d: "q1 correct"},
        correct: "d",
    },
    { question: "What is q2",
        answers: {a: "q2a1", b: "q2a2", c: "q2 correct", d: "q2a4"},
        correct: "c",
    },
    { question: "What is q3",
        answers: {a: "q3a1", b: "q3 correct", c: "q3a3", d: "q3a4"},
        correct: "b",
    },
    { question: "What is q4",
        answers: {a: "q4 correct", b: "q4a2", c: "q4a3", d: "q4a4"},
        correct: "a",
    }
];

var quizQuestions = function () {
    
    console.log(questionCounter);
    
    // var question = [];
    // question.push(questionArray[questionCounter].question);
    // console.log(question);

    questionEl.textContent = questionArray[questionCounter].question;

    // var answers = [];
    // answers.push(questionArray[questionCounter].answers);
    // console.log(answers);

    answerAEl.textContent = questionArray[questionCounter].answers.a;
    answerBEl.textContent = questionArray[questionCounter].answers.b;
    answerCEl.textContent = questionArray[questionCounter].answers.c;
    answerDEl.textContent = questionArray[questionCounter].answers.d;  

}


var checkAnswer = function (event) {
    
    var answerKey = event.target.id.split("-")[2];
    var correct = questionArray[questionCounter].correct;
    // console.log(answerKey === correct);

    if (answerKey === correct) {
        var confirmMessageEl = document.createElement("h3");
        confirmMessageEl.className = "question-confirm-message";
        confirmMessageEl.textContent = "Question " + (questionCounter +1) + " is correct!";
        questionPageEl.appendChild(confirmMessageEl);
    }
    else {
        var confirmMessageEl = document.createElement("h3");
        confirmMessageEl.className = "question-confirm-message";
        confirmMessageEl.textContent = "Question " + (questionCounter +1) + " is incorrect! 10 seconds removed!";
        questionPageEl.appendChild(confirmMessageEl);
        count = count - 10;
        // TODO implement incorrect answer logic
    }

    questionCounter++;
    
    quizQuestions();
    
    // console.dir(event.target);
    // console.log(event.target);
}


// event listeners for clicking through questions
answerAEl.addEventListener("click", checkAnswer)
answerBEl.addEventListener("click", checkAnswer)
answerCEl.addEventListener("click", checkAnswer)
answerDEl.addEventListener("click", checkAnswer)


// event listener to hide opening home page and start quiz when start button is clicked
startButtonEl.addEventListener("click", startQuiz);


