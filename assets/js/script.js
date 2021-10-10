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

var endPageEl = document.querySelector(".end-page");
var finalScoreEl = document.querySelector("#final-score");

var scorePageEl = document.querySelector(".score-page");
var submitScore = document.querySelector("#score-submit");

var nameInput = document.querySelector("#name-input");


// hide initial question/ end page/ score page HTML elements before starting quiz
var questionPageElState = questionPageEl.getAttribute("data-state");
    if (questionPageElState === "hidden") {
        questionPageEl.style.display = "none";
    }
var endPageElState = endPageEl.getAttribute("data-state");
    if (endPageElState === "hidden") {
        endPageEl.style.display = "none";
    }
var scorePageElState = scorePageEl.getAttribute("data-state");
    if (scorePageElState === "hidden") {
        scorePageEl.style.display = "none";
    }

// function to keep a question page hidden until data state changes -- COMBINE THIS
var showHideQuestions = function () {
    var state = questionPageEl.getAttribute("data-state");
    if (state === "hidden") {
        questionPageEl.style.display = "none";
    }
    else {
        questionPageEl.style.display = "block";
    }
}

// function to keep end page hidden until data state changes -- COMBINE THIS
var showHideEndPage = function () {
    var state = endPageEl.getAttribute("data-state");
    if (state === "hidden") {
        endPageEl.style.display = "none";
    }
    else {
        endPageEl.style.display = "block";
    }
}

// function to keep score page hidden until data state changes -- COMBINE THIS
var showHideScorePage = function () {
    var state = scorePageEl.getAttribute("data-state");
    if (state === "hidden") {
        scorePageEl.style.display = "none";
    }
    else {
        scorePageEl.style.display = "block";
    }
}

// function to start quiz
var startQuiz = function () {
    homePageEl.style.display = "none";
    quizTimer();
    questionPageEl.setAttribute("data-state","visible");
    showHideQuestions();
    updateQuestion();
}

// quiz timer
var count = 59;
var quizTimer = function () {
    var timeInterval = setInterval(function () {
        if (count > 0 && ((questionCounter + 1) <= questionArray.length)) {
            // TODO need to come up with condition to stop timer after last question answered
            timerEl.textContent = count;
            count--;
        }
        else {
            clearInterval(timeInterval);
            timerEl.textContent = "End of Game";
        }
    }, 1000);
}


// function to end game
var endGame = function () {
    questionPageEl.setAttribute("data-state", "hidden");
    showHideQuestions();
    endPageEl.setAttribute("data-state", "visible");
    showHideEndPage();

    finalScoreEl.textContent = "Your score is " + count + "!";
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

var updateQuestion = function () {

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

    if ((questionCounter + 1) === questionArray.length) {
        console.log("no questions remaining");
        endGame();
    }
    else {
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
    }
    
    questionCounter++;
    
    updateQuestion();
    }
    // console.dir(event.target);
    // console.log(event.target);
}

var scorePage = function () {
    endPageEl.setAttribute("data-state", "hidden");
    showHideEndPage();
    scorePageEl.setAttribute("data-state", "visible");
    showHideScorePage();
}

var highScores = {
    Name: nameInput.value

}

// event listener to hide opening home page and start quiz when start button is clicked
startButtonEl.addEventListener("click", startQuiz);

// event listeners for clicking through questions
answerAEl.addEventListener("click", checkAnswer);
answerBEl.addEventListener("click", checkAnswer);
answerCEl.addEventListener("click", checkAnswer);
answerDEl.addEventListener("click", checkAnswer);

// event listeners for end page to go to score page when submit button is clicked
submitScore.addEventListener("click", scorePage);




