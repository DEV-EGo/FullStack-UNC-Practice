// Array of zoo animals.
var zooAnimals = ["Zebra", "Rhino", "Giraffe", "Owl"];

// Rewrite the following code to print all of the animals using a for-loop.
// console.log(zooAnimals[0]);
// console.log(zooAnimals[1]);
// console.log(zooAnimals[2]);
// console.log(zooAnimals[3]);

// for loop
// for (var i = 0; i < zooAnimals.length; i++) {
//   console.log(zooAnimals[i]);
// }

console.log("================================================");

// calling function
// function logArray(list) {
//   for (var j = 0; j < zooAnimals.length; j++) {
//     console.log(zooAnimals[j]);
//   }
// }
// logArray(zooAnimals);

console.log("================================================");

// var sodas = [
//   "Pepsi",
//   "Coca-Cola",
//   "Sprite",
//   "Dr.Pepper",
//   "Orange Fanta",
//   "Mountain Dew",
//   "Monster",
// ];

// for (var s = 0; s < sodas.length; s++) {
//   console.log(sodas[s]);
// }
console.log("================function============================");

// function sodaList(thislist) {
//   for (var t = 0; t < thislist.length; t++) {
//     console.log(thislist[t]);
//   }
// }
// sodaList(sodas);

console.log("================================================");

// var artist = [
//   "jay-z",
//   "Nas",
//   "2pac",
//   "Biggie",
//   "Big L",
//   "Big Pun",
//   "Wu-Tang",
//   "Juice Wrld",
// ];

// for (var n = 0; n < artist.length; n++) {
//   console.log(artist[n]);
// }
console.log("================function============================");
// function rapper(artistList) {
//   for (var u = 0; u < artistList.length; u++) {
//     console.log(artistList[u]);
//   }
// }
// rapper(artist);
console.log("================================================");

// var rockband = [
//   "LINKIN PARK",
//   "The Rollingstones",
//   "Nirvana",
//   "The Doors",
//   "Rammnstein",
//   "3 days grace",
//   "Shinedown",
// ];

// for (var s = 0; s < rockband.length; s++) {
//   console.log(rockband[s]);
// }
console.log("================function============================");
// function letsRock(rockbands) {
//   for (var r = 0; r < rockbands.length; r++) {
//     console.log(rockbands[r]);
//   }
// }
// letsRock(rockband);

console.log("============================================");

// var cellphone = [
//   "Iphone",
//   "SideKick",
//   "Boost",
//   "Nextel",
//   "Samsung",
//   "Galaxys10",
// ];

// for (var k = 0; k < cellphone.length; k++) {
//   console.log(cellphone[k]);
// }

console.log("================function============================");
// function cellular(PhonesToSell) {
//   for (var l = 0; l < PhonesToSell.length; l++) {
//     console.log(PhonesToSell[l]);
//   }
// }
// cellular(cellphone);
console.log("============================================");

// var mainCharacters = [
//   "Mario",
//   "DOOM Guy",
//   "Metroid",
//   "Donkey Kong",
//   "Venom",
//   "carnage",
//   "spiderman",
// ];

// for (var w = 0; w < mainCharacters.length; w++) {
//   console.log(mainCharacters[w]);
// }
console.log("================function============================");
// function ChooseAcharacter(MainPlayer) {
//   for (var e = 0; e < MainPlayer.length; e++) {
//     console.log(MainPlayer[e]);
//   }
// }
// ChooseAcharacter(mainCharacters);
console.log("================function========================");
// var HIPHOP = [
//   "A tribe called quest",
//   "Wu-Tang",
//   "Terror Squad",
//   "Jr Mafia",
//   "Mobb Deep",
//   "NWA",
// ];

// function oldSchoolHipHop(RealRap) {
//   for (var q = 0; q < RealRap.length; q++) {
//     console.log(RealRap[q]);
//   }
// }
// oldSchoolHipHop(HIPHOP);

console.log("============================================");

// var i_am = ["0", "1", "2", "3", "4"];
// for (var y = 0; y < i_am.length; y++) {
//   console.log(" i am " + i_am[y]);
// }

// for (var b = 0; b < 5; b++) {
//   console.log(" i am " + b);
// }

console.log("============================================");

var wheel_brands = [
  "Work Meister",
  "BBS",
  "STR",
  "VOSSEN",
  "FORGIATO",
  "OEM",
  "XXR",
];

var listof_wheels_to_buy = wheel_brands.length;

for (var h = 0; h < listof_wheels_to_buy; h++) {
  console.log(wheel_brands[h]);

  if (wheel_brands[h].charAt(0) === "F" || wheel_brands[h].charAt(0) === "o") {
    alert("starts with a F or an O!");
  }
}

console.log("============================================");
