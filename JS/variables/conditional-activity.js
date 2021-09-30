// Here we ask the user if they eat steak, and store the result (true/false) in a variable.
var eatSteak = confirm("Do you eat steak?");

// If the user eats steak (eatSteak === true) we run the following code block.
if (eatSteak) {
  document.write("Here's a steak");
}
// If the above condition isn't met (eatSteak !== true), run the following block of code instead.
else {
  document.write("Here's a tofu stir fry!");
}

// Bonus
// Here we ask the user what year they were born, and store their response to a variable.
var birthYear = prompt("What year were you born?");

// If the user was born before 1997, alert "SAKE SAKE SAKE!"
if (birthYear < 1997) {
  alert("SAKE SAKE SAKE!");
}
// Else if the user was born after 1997, alert "No Sake for you!"
else if (birthYear > 1997) {
  alert("No Sake for you!");
}
// If neither of the previous conditions was true (birthYear === 1995) we alert "You inched by!"
else {
  alert("You inched by! Sake Sake Sake!");
}
// ===============================

var goToMovies = confirm("Do you want to go to the movies?");
if (goToMovies) {
  document.write("lets go!");
} else {
  document.write("stay home watch some netflix");
}

var CanYougetIn = prompt(
  " You have to be 18 years and older to watch this movie"
);

if (CanYougetIn < 2009) {
  alert("You have to be 18 years and older to watch this movie");
} else if (CanYougetIn > 2009) {
  alert("get in");
} else {
  alert("You got in!");
}
