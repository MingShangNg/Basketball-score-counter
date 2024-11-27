// Declare variables
let homeScore = document.getElementById("home-score");
let guestScore = document.getElementById("guest-score");
let timerEl = document.getElementById("timer");

let scoreHome = 0;
let scoreGuest = 0;
let gameActive = true; // Flag to track whether the game is active

// Update score and style based on team and points
function updateScore(team, points) {
  if (gameActive) {
    if (team === "home") {
      scoreHome += points;
      if (scoreHome < 0) scoreHome = 0; // Prevent negative scores
      homeScore.textContent = scoreHome;
    } else if (team === "guest") {
      scoreGuest += points;
      if (scoreGuest < 0) scoreGuest = 0; // Prevent negative scores
      guestScore.textContent = scoreGuest;
    }

    // Update styles based on scores
    updateStyles();

  }
}

// Update styles for scores
function updateStyles() {
  if (scoreHome > scoreGuest) {
    homeScore.style.color = "white";
    homeScore.style.backgroundColor = "green";
    guestScore.style.color = "black";
    guestScore.style.backgroundColor = "red";
  } else if (scoreGuest > scoreHome) {
    guestScore.style.color = "white";
    guestScore.style.backgroundColor = "green";
    homeScore.style.color = "black";
    homeScore.style.backgroundColor = "red";
  } else {
    homeScore.style.color = "red";
    homeScore.style.backgroundColor = "black";
    guestScore.style.color = "red";
    guestScore.style.backgroundColor = "black";
  }
}

// Start the game timer
let timeRemaining = 60; // Set the timer duration in seconds

function startTimer() {
  gameActive = true;
  timerEl.textContent = `Time: ${timeRemaining}s`;

  let timer = setInterval(function () {
    if (timeRemaining > 0) {
      timeRemaining -= 1;
      timerEl.textContent = `Time: ${timeRemaining}s`;
    } else {
      clearInterval(timer);
      timerEl.textContent = "Time's up!";
      gameActive = false; // Disable score updates
    }
  }, 1000);
}

// Reset scores, styles, and timer for a new game
function newGame() {
  scoreHome = 0;
  scoreGuest = 0;
  timeRemaining = 60; // Reset timer
  gameActive = true; // Reactivate the game

  homeScore.textContent = scoreHome;
  guestScore.textContent = scoreGuest;
  timerEl.textContent = `Time: ${timeRemaining}s`;

  homeScore.style.color = "red";
    homeScore.style.backgroundColor = "black";
    guestScore.style.color = "red";
    guestScore.style.backgroundColor = "black";

}

function startGame(){
  startTimer()
}
