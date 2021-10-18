// Created an array named myBands.
var MyBands = ["britney", "selena", "bob dylan", "blink 182", "green day"];
// Created an array named myBands.
var GuessUser = prompt(" which band or artist do you like?");
// Converts the user's answer to lowercase.
var GuessUserLower = GuessUser.toLowerCase();
// Now we check the myBands array to see if it contains the user's answer.
// If the user's band is not in the array...
if (MyBands.indexOf(GuessUserLower) === -1) {
  alert(" nah! they are lame");
}
// If it is in the array...
else {
  alert("They rock!");
}

// ===============================

// var thingsToEat = [
//   "Tacos",
//   "Burgers",
//   "Pizza",
//   "Spaghetti",
//   "Cake",
//   "Chiken Wings",
// ];

// var CustomerUser = prompt("what would you like to order?");

// var CustomerUserLower = CustomerUser.toLowerCase();

// if (thingsToEat.indexOf(CustomerUserLower) === -1) {
//   alert("That sounds delicious");
// } else {
//   alert("We dont carry that");
// }

// =================================================================================================
var bitcoin = ["BTC", "LTC", "DODGE", "DAI", "LUNAR", "DOT", "BCH"];

var coins_to_buy = prompt(
  " are you interested in buying your first crypto coin?"
);

var crypto_to_lowercase = coins_to_buy.toLowerCase();

if (bitcoin.indexOf(coins_to_buy) === -1) {
  alert(" cha!-ching!");
} else {
  alert("USD for you! no crypto.");
}
