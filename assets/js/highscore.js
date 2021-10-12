var scoreListEl = document.querySelector("#score-list");

// function to capture name and score value
var addScore = function () {
    
    var highScores = JSON.parse(window.localStorage.getItem("scores")) || [];

    highScores.forEach(function(scoreObject) {
        var scoreItemEl = document.createElement("li");
        scoreItemEl.textContent = "Name: " + scoreObject.name + " - " + "Score: " + scoreObject.score;
        scoreListEl.appendChild(scoreItemEl);
    })  
}
addScore();