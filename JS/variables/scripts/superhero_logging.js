// Various Arrays
var brands = ["Acer", "Apple", "Sony", "Samsung"];
var heroes = [
  "Black Panther",
  "Cyborg",
  "Black Canary",
  "Donna Troy",
  "Huntress",
  "Blue Beetle",
  "Captain Atom",
];
var booksOnMyShelf = [
  "Calculus Early Transcendentals",
  "Ravens",
  "The Self Illusion",
  "Harry Potter",
];
var thingsInFrontOfMe = ["Laptop", "Beanbag", "Cats", "Slippers"];
var howIFeel = ["Sleep Deprived", "Wired on Coffee", "Excited"];

// For Loop for Brands
for (var i = 0; i < brands.length; i++) {
  console.log(brands[i]);
}
console.log("---------");

// For Loop for Heroes
for (var j = 0; j < heroes.length; j++) {
  console.log(heroes[j]);
}
console.log("---------");

// For Loop for booksOnMyShelf
for (var k = 0; k < booksOnMyShelf.length; k++) {
  console.log(booksOnMyShelf[k]);
}
console.log("---------");

// For Loop for thingsInFrontOfMe
for (var l = 0; l < thingsInFrontOfMe.length; l++) {
  console.log(thingsInFrontOfMe[l]);
}
console.log("---------");

// For Loop for howIFeel
for (var m = 0; m < howIFeel.length; m++) {
  console.log(howIFeel[m]);
}
console.log("============More practice==================");

var soda = ["pepsi", "coca cola", "sprite", "fanta"];
var food = ["popcorn", "hot dog", "nachos", "eminems"];
var movies = ["The matrix", "Dont look up", "encanto", "Spider-Man"];
var theaters = ["IMAX", "AMC", "DOLBY", "Digital"];

// for loop sodas
for (var s = 0; s < food.length; s++) {
  console.log(soda[s]);
}
console.log("---------");
// for loop food
for (var f = 0; f < food.length; f++) {
  console.log(food[f]);
}
console.log("---------");
// for loop movies
for (var m = 0; m < movies.length; m++) {
  console.log(movies[m]);
}
console.log("---------");

// for loop theaters
for (var t = 0; t < theaters.length; t++) {
  console.log(theaters[t]);
}
console.log("============More practice==================");

var cities = ["charlotte", "NYC", "LA", "Denver"];
var capital = ["Washington", "Raleigh", "Buffalo"];

// for loop cities
for (var y = 0; y < cities.length; y++) {
  console.log(cities[y]);
}
console.log("---------");

// for loop capital
for (var p = 0; p < capital.length; p++) {
  console.log(capital[p]);
}
console.log("============More practice==================");

// VARIABLES
// =======================================================================================
var raceCars = ["Supra", "Skyline", "GT86", "Challenger", "Sti", "Truck"];
var muscleCars = ["Demon", "Hellcat", "Shelby"];

var clothes = ["supreme", "bape", "north face", "vans"];
var sneakers = ["timberlands", "Lebrons", "Jordans", "Nike SB"];

var countries = ["Cameroon", "paris", "new york", "argentina"];

var designer = ["GUCCI", "LV", "Prada", "Chanel"];

// FUNCTIONS
// ========================================================================================

// Here we create a "Function" that allows us to "call" (run) the loop for any array we wish.
// We pass in an array as an "argument".

function consoleInside(arr) {
  // We then loop through the selected array.

  for (var i = 0; i < arr.length; i++) {
    // Each time we print the value inside the array.

    console.log(arr[i]);
  }
  console.log("================================");
}

//
console.log("================================");
function showmelist(manifest) {
  for (var u = 0; u < manifest.length; u++) {
    console.log(manifest[u]);
  }
  console.log("================================");
}
//
function worlwide(nations) {
  for (var n = 0; n < nations.length; n++) {
    console.log(nations[n]);
  }
}
console.log("================================");

//
function italian(clothes) {
  for (var f = 0; f < clothes.length; f++) {
    console.log(clothes[f]);
  }
}
console.log("================================");

// FUNCTION CALLS (Execution)
// =======================================================================================

// Here we call the function to run our for-loop code on each of the following arrays.
consoleInside(raceCars);
consoleInside(muscleCars);

showmelist(clothes);
showmelist(sneakers);

worlwide(countries);

italian(designer);
