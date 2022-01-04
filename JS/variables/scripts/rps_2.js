var choices_computer = ["r", "p", "s"];
// variables that will hold scores
var wins = 0;
var loss = 0;
var ties = 0;

// variables that will target references in the html
var directionsText = document.getElementById("direction-text");
var userChoiceText = document.getElementById("userchoice-text");
var computerChoiceText = document.getElementById("computerchoice-text");
var winsText = document.getElementById("wins-text");
var lossesText = document.getElementById("losses-text");
var tiesText = document.getElementById("ties-text");

// ===============================

// function will fire when user hits keyboard
document.onkeyup = function (event) {
  // determines what key was hit
  var user_Guess = event.key;

  // randomly chooses a choice from the option array
  // this is the computer guess
  var computer_Guess =
    choices_computer[Math.floor(Math.random() * choices_computer.length)];

  // "else if" will determine the outcome of the game (win/loss/tie)
  if (user_Guess === "r" || user_Guess === "p" || user_Guess === "s") {
    if (
      (user_Guess === "r" && computer_Guess === "s") ||
      (user_Guess === "s" && computer_Guess === "p") ||
      (user_Guess === "p" && computer_Guess === "r")
    ) {
      wins++;
    } else if (user_Guess === computer_Guess) {
      ties++;
    } else {
      loss++;
    }

    // hide the direction
    directionsText.textContent = "";

    // Display the user and computer guesses, wins/losses/ties
    userChoiceText.textContent = "you chose:" + user_Guess;
    computerChoiceText.textContent = "the computer chose:" + computer_Guess;
    winsText.textContent = "wins:" + wins;
    lossesText.textContent = "losss:" + loss;
    tiesText.textContent = "ties" + ties;
  }
};
