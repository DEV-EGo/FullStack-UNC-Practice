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

var youpick = ["y", "u", "i"];

document.onkeyup = function (event) {
  var uGuess = event.key;
  var cGuess = youpick[Math.floor(Math.random() * youpick.length)];

  alert(" you guessed:" + uGuess);
  alert(" AI chose:" + cGuess);
};
