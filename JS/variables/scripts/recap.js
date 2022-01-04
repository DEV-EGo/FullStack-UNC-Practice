// Instructions:
// Using the given arrays, complete the questions below!

console.log("==========================");

var hypercars1 = ["Supra", "Viper", "Audi R8", "Ferrari"];
var JDMcars2 = ["GT86", "Skyline", "RX7", "STI", "Honda Type R", "370z"];
var Musclecars3 = ["Charger", "Challenger", "Road Runner", "Camaro", "Mustang"];

var listOfVehicles = hypercars1,
  JDMcars2,
  Musclecars3;

// print out jdmcars

for (var c = 0; c < hypercars1.length; c++) {
  console.log(hypercars1[c]);
}
console.log("==========================");

// print out every car in row 2whose first name begins with S?
for (var k = 0; k < Musclecars3.length; k++) {
  if (Musclecars3[k].charAt(0) === "C") {
    console.log("start with C " + Musclecars3[k]);
  }
}

console.log("==========================");
// Using the listofCars array, how do we access the second car in row 3?

console.log("3rd car in the list of car array");
console.log(listOfVehicles[0][1]);

console.log("==========================");

// Rows of Students
var studentsRow1 = ["Rachelle", "Jacob", "Jerome", "Greg", "Matt", "Walt"];
var studentsRow2 = ["Jeremiah", "Luis", "Nathan", "Analben"];
var studentsRow3 = ["Aisha", "Stephen", "John"];

// Entire Class
var entireClass = [studentsRow1, studentsRow2, studentsRow3];

// How do we print out every single student in Row 1?
for (var i = 0; i < studentsRow1.length; i++) {
  console.log(studentsRow1[i]);
}

console.log("================================================");
// How do we print out every student in Row 2 whose first name begins with J?
for (var j = 0; j < studentsRow2.length; j++) {
  if (studentsRow2[j].charAt(0) === "J") {
    console.log("Start with a J " + studentsRow2[j]);
  }
}
console.log("================================================");

// Using the entireClass array, how do we access the second student in row 3?
console.log("second student in row 3.");
console.log(entireClass[2][1]);

console.log("================================================");

// Using the entireClass array, how do we access the third student in row 2?
console.log("third student in row 2.");
console.log(entireClass[1][2]);

console.log("================================================");

var videoGameSystem = ["xbox", "playstation", "switch"];
var Game = ["Halo", "call of duty", "metroid"];

var stockOfGames = [videoGameSystem, Game];

for (var p = 0; p < videoGameSystem.length; p++) {
  if (videoGameSystem[p].charAt(0) === "s") {
    console.log("system with the leter s " + videoGameSystem[p]);
  }
}

console.log("================================================");

var netflix = [
  "YOU",
  "Narcos",
  "Sons of Anarchy",
  "Orange Is the New The Black",
];

var providers = ["HBO Max", "Neflix", "HULU"];

for (var r = 0; r < netflix.length; r++) {
  console.log(netflix[r]);
}
