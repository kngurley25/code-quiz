// DOM elements from HTML
var startButtonEl = document.querySelector("#start-button");
var homePageEl = document.querySelector(".home-page")

// variables to create code questions
var questionEl = document.createElement("div");
var answerListEl = document.createElement("ul");
var choiceEl = document.createElement("li");

// array for code questions
var questionBank = [
    {question: "what is xxx",
    options: ["x", "y", "z", "u"],
    answer: 1},
    {question: "what is xxx",
    options: ["x", "y", "z", "u"],
    answer: 2},
    {question: "what is xxx",
    options: ["x", "y", "z", "u"],
    answer: 3},
    {question: "what is xxx",
    options: ["x", "y", "z", "u"],
    answer: 4}
]

// function to loop through questions
for (var i = 0; i <questionBank.length; i++) {
    var question = questionBank[i].question;
    var options = questionBank[i].options;
    
    questionEl.textContent = question;
    answerListEl.textContent = options;

    document.body.appendChild(questionEl);
    document.body.appendChild(answerListEl);
}




// function to randomize questions



// function to start quiz



// event listener to hide opening home page when start button is clicked
startButtonEl.addEventListener("click", function() {
    homePageEl.style.display = "none";

    // call function to start quiz

})


