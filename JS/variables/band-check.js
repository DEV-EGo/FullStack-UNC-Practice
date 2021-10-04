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
