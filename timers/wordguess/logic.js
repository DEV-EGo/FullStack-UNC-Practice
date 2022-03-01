// array of words to choose from
var wordlist = ["Eppi", "Jordan", "Gracie", "Bryan", "Ricky", "katherine"];

// Computer selected solutions held here
var chosenWord = "";

// this will break the solution into individual letters to be stored
var lettersInChosenWord = [];

// This will be the number of blanks we show based on the solution.
var numBlanks = 0;

// This will be the number of blanks we show we based on the solutions
var blanksAndSuccess = [];

// Holding the wrong solutions
var wrongGuesses = [];

// Holds all the letters guessed
var letterGuessed = [];

// Game counter
var winsCounter = 0;
var lossCounter = 0;
var numGuesses = 9;

// FUNCTIONS

// How to start the game
function startGame() {
  // reset guesses back to 0
  numGuesses = 9;

  // random Solution from wordlist
  chosenWord = wordlist[Math.floor(Math.random() * wordlist.length)];

  //   breaking word into individual letters
  lettersInChosenWord = chosenWord.split("");

  //   counting number of letters in the word
  numBlanks = lettersInChosenWord.length;

  //   printing the solution in console for testing purposes
  console.log(chosenWord);

  //   **critical line
  // Here we *reset* the guess and success array at each round.
  blanksAndSuccess = [];

  // CRITICAL LINE
  // Here we *reset* the wrong guesses from the previous round.
  wrongGuesses = [];

  //   fill up the blank and success on list with appropiate number of blanks
  // this is based on number of letters in the solution
  for (var i = 0; i < numBlanks; i++) {
    blanksAndSuccess.push("_");
  }
  // Print the initial blanks in console.
  console.log(blanksAndSuccess);

  //   reprint the guesses left
  console.log("guesses-left").innerHTML = numGuesses;

  //print blanks at the beginning of each round
  document.getElementById("word-blanks").innerHTML = blanksAndSuccess.join("");

  //   clear the wrong guesses from the previous round
  document.getElementById("word-guesses").innerHTML = wrongGuesses.join("");
}

// check letters function
// doing all the comparisons
function checkLetter(letter) {
  // boolean will be toggled based on wethere the user letter is Found
  var letterInWord = false;
}
