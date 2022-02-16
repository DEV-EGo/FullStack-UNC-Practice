// Array holds all of the drinks available
// var drinkList = [
//   "Coffee: $5",
//   "Espresso: $7",
//   "Cappuccino: $6",
//   "Latte: $4",
//   "Tea: $3",
//   "Ice Coffee: $6",
//   "Ice Espresso: $8",
//   "Ice Latte: $6",
//   "Ice Tea: $4",
// ];

// 1. Create code that "grabs" the div with the matching id (#drink-options);
// ...

// var drinkDiv = document.getElementById("drink-options");
// ...

// 2. Create a for loop that creates HTML content of all the drinks using JavaScript.
// HINT: You will need to use each of the following methods: createElement, textContent, appendChild
// ...
// for (var i = 0; i < drinkList.length; i++) {
//   var pourUp = document.createElement("p");

//   pourUp.textContent = drinkList[i];

//   drinkDiv.appendChild(pourUp);
// }
// ...

var gamelist = [
  "Call of Duty",
  "Gears of war",
  "Need For Speed",
  "Crash Bandicoot",
  "Pokemon",
  "Metroid",
  "Spider-Man",
];

var gDiv = document.createElement("game");

gamelist.forEach(function (VG) {
  var vList = document.createElement("p");
  vList.textContent = VG;
  gDiv.appendChild(vList);
});

$(document).ready(function () {
  $("#click-this").on("click", function () {
    alert("i been hit");
  });
});
