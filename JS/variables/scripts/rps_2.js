var choices_computer = ["r", "p", "s"];
// variables that will hold scores
var Wins = 0;
var loss = 0;
var Ties = 0;

// variables that will target references in the html
// var directionsText = document.getElementById("direction-text");
// var userChoiceText = document.getElementById("userchoice-text");
// var computerChoiceText = document.getElementById("computerchoice-text");
// var winsText = document.getElementById("wins-text");
// var lossesText = document.getElementById("losses-text");
// var tiesText = document.getElementById("ties-text");

// ===============================

var textDirections = document.getElementById("text-directions");
var ChoicetextComputer = document.getElementById("choicetext-computer");
var TextUserChoice = document.getElementById("text-user-choice");
var textWins = document.getElementById("wins-text");
var textlosses = document.getElementById("losses-text");
var textTies = document.getElementById("ties-text");

document.onkeyup = function (event) {
  var Guess_byUser = event.key;

  var Guess_Computing =
    choices_computer[Math.floor(Math.random() * Guess_Computing.length)];
  if (Guess_byUser === "r" || Guess_byUser === "p" || Guess_byUser === "s") {
    if (
      (Guess_byUser === "r" && Guess_byUser === "s") ||
      (Guess_byUser === "s" && Guess_byUser === "p") ||
      (Guess_byUser === "p" && Guess_byUser === "r")
    ) {
      Wins++;
    } else if (Guess_byUser === Guess_Computing) {
      Ties++;
    } else {
      loss++;
    }

    directionsText.textContent = "";

    textDirections.textContent = "you chose:" + Guess_byUser;
    ChoicetextComputer.textContent = "the computer chose:" + Guess_byUser;
    textWins.textContent = "wins:" + Wins;
    textlosses.textContent = "losses:" + loss;
    textTies.textContent = "ties" + Ties;
  }
};
// function will fire when user hits keyboard
// document.onkeyup = function (event) {
// determines what key was hit
// var user_Guess = event.key;

// randomly chooses a choice from the option array
// this is the computer guess
// var computer_Guess =
//   choices_computer[Math.floor(Math.random() * choices_computer.length)];

// "else if" will determine the outcome of the game (win/loss/tie)
// if (user_Guess === "r" || user_Guess === "p" || user_Guess === "s") {
//   if (
//     (user_Guess === "r" && computer_Guess === "s") ||
//     (user_Guess === "s" && computer_Guess === "p") ||
//     (user_Guess === "p" && computer_Guess === "r")
//   ) {
//     wins++;
//   } else if (user_Guess === computer_Guess) {
//     ties++;
//   } else {
//     losses++;
//   }

// hide the direction
// directionsText.textContent = "";

// Display the user and computer guesses, wins/losses/ties
//     userChoiceText.textContent = "you chose:" + user_Guess;
//     computerChoiceText.textContent = "the computer chose:" + computer_Guess;
//     winsText.textContent = "wins:" + wins;
//     lossesText.textContent = "losss:" + losses;
//     tiesText.textContent = "ties" + ties;
//   }
// };
