// DOM elements from HTML
var startButtonEl = document.querySelector("#start-button");
var homePageEl = document.querySelector(".home-page");
var timerEl = document.querySelector("#timer");


// variables to create code questions
var questionPageEl = document.createElement("div");
questionPageEl.className = "question-page";
var questionEl = document.createElement("h2");
questionEl.className = "question";
var answerListEl = document.createElement("ul");
var choiceEl = document.createElement("li");

// quiz timer
function quizTimer () {
    var count = 60;
    
    var timeInterval = setInterval(function () {
        if (count > 1) {
            timerEl.textContent = count;
            count--;
        } else {
            timerEl.textContent = "";
            clearInterval(timeInterval);
            endGame();
        }
    }, 1000);
}

// array for code questions
var questionBank = [
    {question: "what is xxx",
    options: ["x", "y", "z", "u"],
    answer: 1},
    {question: "what is yyy",
    options: ["a", "y", "z", "u"],
    answer: 2},
    {question: "what is zzz",
    options: ["b", "y", "z", "u"],
    answer: 3},
    {question: "what is uuu",
    options: ["c", "y", "z", "u"],
    answer: 4}
]

// loop through questions
var quizQuestion = function ()  {
    for (var i = 0; i <questionBank.length; i++) {
        var question = questionBank[i].question;
        var options = questionBank[i].options;

        questionEl.textContent = question;
        answerListEl.textContent = options;

        questionPageEl.appendChild(questionEl);
        questionPageEl.appendChild(answerListEl);
    }
}




// function to randomize questions



// function to start quiz



// function to end quiz



// event listener to hide opening home page when start button is clicked
startButtonEl.addEventListener("click", function() {
    homePageEl.style.display = "none";
    quizTimer();

    // call function to start quiz

})


