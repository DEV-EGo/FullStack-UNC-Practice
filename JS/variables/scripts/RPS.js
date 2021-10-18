// creating back end for rock-paper-scissor game

// Creates an array that lists out all of the options (Rock, Paper, or Scissors).
// var computer_choices = ["r", "p", "s"];

// function below runs whenever the user presses a key.
// document.onkeyup = function (event) {
// determines what key was pressed
//   var GuessByUser = event.key;

// Choses randomly from the options array (computers guess)

//   var GuessByComputer =
// computer_choices[Math.floor(Math.random() * computer_choices.length)];

// alerts key that user pressed
//   alert(" Player one chose " + GuessByUser);

//   alert the computer guess
//   alert(" Computer chose " + GuessByComputer);
// };
// =================================================================

// var youpick = ["y", "u", "i"];

// document.onkeyup = function (event) {
//   var uGuess = event.key;
//   var cGuess = youpick[Math.floor(Math.random() * youpick.length)];

//   alert(" you guessed:" + uGuess);
//   alert(" AI chose:" + cGuess);
// };

// var youguessedit = ["w", "e", "r"];

// document.onkeyup = function (event) {
//   var youpicked = event.key;
//   var outcome = youguessedit[Math.floor(Math.random() * youguessedit.length)];
//   alert("your choice:" + youpicked);
//   alert("robot chose:" + outcome);
// };

// more practice using different letters and
var winning_letters = ["Rock", "Paper", "Scissors"];

document.onkeyup = function (event) {
  var edwinChose = event.key;
  var player2_chose =
    winning_letters[Math.floor(Math.random() * winning_letters.length)];

  alert(" Edwin chose: " + edwinChose);
  alert(" Player 2 chose: " + player2_chose);
};
