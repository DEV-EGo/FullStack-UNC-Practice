// Array of zoo animals.
var zooAnimals = ["Zebra", "Rhino", "Giraffe", "Owl"];

// Rewrite the following code to print all of the animals using a for-loop.
// console.log(zooAnimals[0]);
// console.log(zooAnimals[1]);
// console.log(zooAnimals[2]);
// console.log(zooAnimals[3]);

// for loop
for (var i = 0; i < zooAnimals.length; i++) {
  console.log(zooAnimals[i]);
}

console.log("================================================");

// calling function
function logArray(list) {
  for (var j = 0; j < zooAnimals.length; j++) {
    console.log(zooAnimals[j]);
  }
}
logArray(zooAnimals);

console.log("================================================");

var sodas = [
  "Pepsi",
  "Coca-Cola",
  "Sprite",
  "Dr.Pepper",
  "Orange Fanta",
  "Mountain Dew",
  "Monster",
];

for (var s = 0; s < sodas.length; s++) {
  console.log(sodas[s]);
}
console.log("================================================");

function sodaList(thislist) {
  for (var t = 0; t < thislist.length; t++) {
    console.log(thislist[t]);
  }
}
sodaList(sodas);
