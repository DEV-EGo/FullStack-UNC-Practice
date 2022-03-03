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

  //   check if the letter exist inside the array
  for (var i = 0; i < numBlanks; i++) {
    if (chosenWord[i] === letter) {
      // if letter exist then it will toggle the boolean
      letterinWord = true;
    }
  }

  //   if letter exist somewhere in the word then figure out where exactly

  if (letterinWord) {
    // loop through the word
    for (var j = 0; j < numBlanks; j++) {
      // populate the blankandsucess arrray with every instance of the letter exist
      if (chosenWord[j] === letter) {
        blanksAndSuccess[j] = letter;
      }
    }
    console.log(blanksAndSuccess);
  } else {
    wrongGuesses.push(letter);

    // we also substract one of the guesses
    numGuesses--;
  }
}

// roundComplete() function
// its where we will do all of the comparison for matches
// again, its not being called here. its just being made for future use

function checkLetter(letter) {
  // this boolean will be toggled based on wether or not we are
  // a user letter is found anywhere in the word

  var letterinWord = false;

  // check if a letter exist inside the array at all the

  for (var i = 0; numBlanks; i++) {
    if (chosenWord[i] == letter) {
      letterinWord = true;
    }
  }

  //   if the letter exist somewhere in the word
  // then figure out exactly where it lands

  // loop through the word
  if (letterInWord) {
    for (var j = 0; j < numBlanks; j++) {
      if (chosenWord[j] == letter) {
        blanksAndSuccess[j] = letter;
      }
    }
    console.log(blanksAndSuccess);
  } else {
    //   then we add the letter to the llist of wrong letters
    wrongGuesses.push(letter);

    // we also substract one of the guesses
    numGuesses--;
  }
}

// roundComplete () function

function roundComplete() {
  // tells how many wins-losses-guesses
  console.log(
    "winCount:" +
      winsCounter +
      " | LossCount: " +
      lossCounter +
      " | NumGuesses: " +
      numGuesses
  );

  //   html update
  document.getElementById("guesses-left").innerHTML = numGuesses;

  //   this will print the array of guesses and blanks onto the screen

  document.getElementById("wrong-blanks").innerHTML = blankandsucess.join("");

  //   this will print out all the wrong guesses onto the page
  document.getElementById("wrong-guesses").innerHTML = wrongGuesses.join("");

  //   if guess equals to the solution it will prompt here
  if (lettersInChosenWord.toString() === blanksAndSuccess.toString()) {
    // add to win counter
    winsCounter++;

    // give the user an alert
    alert(" you win");

    // update the win counter
    document.getElementById("win-counter").innerHTML = winsCounter;

    // restart the game
    startGame();
  } else if (numGuesses === 0) {
    //   add to the loss
    lossCounter++;

    // give the user an alert
    alert(" you loss");

    // update the losss counter in html
    document.getElementById("loss-counter").innerHTML = lossCounter;

    // restart the game
    startGame();
  }
}

// start the game
startGame();

// initiate the function for capturing clicks
document.onkeyup = function (event) {
  // initiate key to capture clicks
  letterGuessed = String.fromCharCode(event.which).toLowerCase();

  // run the code to check for correct guesses
  checkLetter(letterGuessed);

  //   run code when each round end
  roundComplete();
};
