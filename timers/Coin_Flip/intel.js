var headCount = 0;
var tailCount = 0;
var tailsCount = 0;
var wins = 0;
var losses = 0;

function flipThatCoin(results) {
  // step1 : Declare & initialize variable randomNumber 1 or 0.
  var randomNumber = Math.floor(Math.random() * 2);

  // step 2: randomNumber equal 0 then : div with coin-image will be replaced with this image

  if (randomNumber === 0) {
    $("#coin-image").hmtml(
      "<img src='http://random-ize.com/coin-flip/us-quarter/us-quarter-front.jpg' />"
    );
  } //   else: random number will display back of the coin
  else {
    $("#coin-image").html(
      "<img src='http://random-ize.com/coin-flip/us-quarter/us-quarter-back.jpg' />"
    );
  }

  //  STEP THREE:
  //  If result is equal to randomNumber, do the following:
  //  Increment wins by one.
  //  Find the div with an id of win-lose. Update it with an h2 of "Winner!"
  //  Find the div with an id of wins. Update it with the value of the wins variable.

  if (results === randomNumber) {
    wins++;
    $("#win-lose").html("<h2>Winner!</h2>");
    $("#wins").html("<h3>" + wins + "</h3>");
  }
  //  Else:
  //  Increment losses by one.
  //  Find the div with an id of win-lose. Update it with an h2 of "Loser!"
  //  Find the div with an id of losses. Update it with the value of the losses variable.
  else {
    losses++;
    $("#win-lose").html("<h2>Loser!</h2>");
    $("#losses").html("<h3>" + losses + "</h3>");
  }
}

$("#heads").on("click", function () {
  headCount++;
  $("#heads-chosen").text(headCount);
  $("#guess").html("<b>Heads</b>");
  flipThatCoin(0);
});

//  STEP FOUR:
//  Increment tailsCount by one.
//  Find the span with an id of tails-chosen. Replace the html inside of the span with the tailsCount.
//  Find the div with an id of guess. Update it with the word "Tails" bolded.
//  Call the flipThatCoin function and pass value 1 into it.

$("#tails").on("click", function () {
  tailsCount++;
  $("#tails-chosen").text(tailsCount);
  $("#guess").html("<b>Tails</b>");
  flipThatCoin(1);
});
