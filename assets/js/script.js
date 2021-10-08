// DOM elements
var startButtonEl = document.querySelector("#start-button");
var homePageEl = document.querySelector(".home-page")

// event listener to "hide" home page when start button is clicked
startButtonEl.addEventListener("click", function() {
    homePageEl.style.display = "none";
})