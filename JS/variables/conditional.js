// Here we create our prompt and confirm variables which will store user input.
var confirmSushi = confirm("Do you like sushi?");
var confirmGingerTea = confirm("Do you like Ginger Tea?");
var sushiType = prompt("What kind of sushi do you like?");

// If the user likes sushi (confirmSushi === true), we run the following block of code.
if (confirmSushi) {
  alert("You like " + sushiType + "!");
}
// If the user likes ginger tea (confirmGingerTea === true), we run the following block of code.
else if (confirmGingerTea) {
  alert("You like ginger tea!!");
}
// If neither of the previous condition were true, we run the following block of code.
else {
  alert("You don't like sushi or ginger tea.");
}

// =================================================================================================
// Here we create our prompt and confirm variables which will store user input.

// If the user likes sushi (confirmSushi === true), we run the following block of code.

// If the user likes ginger tea (confirmGingerTea === true), we run the following block of code.

// If neither of the previous condition were true, we run the following block of code.
