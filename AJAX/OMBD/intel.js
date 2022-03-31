// constructing a queryURL variable we will use instead of the literal string inside of the ajax method
var title = "the+matrix";
var queryURL =
  "https://www.omdbapi.com/?t=" + title + "&y=&plot=short&apikey=trilogy";

$.ajax({
  url: queryURL,
  method: "GET",
}).then(function (response) {
  console.log(response);
  console.log(response.Runtime);
});

console.log("this will og first");
var x = 2;
var y = 10;
var z = 13;

console.log(
  "We can also assign some variables and do some arithmetic while we wait too: 2 + 10 + 13 = ",
  x + y + z
);
// ------------------------------------------------------
$.ajax({
  url: "https://www.omdbapi.com/?t=romancing+the+stone&y=&plot=short&apikey=trilogy",
  method: "GET",
}).then(function (response) {
  console.log(response);
  console.log(response.Runtime);
});

$.ajax({
  url: "https://www.omdbapi.com/?t=the+revenant&y=&plot=short&apikey=trilogy",
  method: "GET",
}).then(function (response) {
  console.log(response);
  console.log(response.Runtime);
});

$.ajax({
  url: "https://www.omdbapi.com/?t=god+father&y=&plot=short&apikey=trilogy",
  method: "GET",
}).then(function (response) {
  console.log(response);
  console.log(response.Runtime);
});

$.ajax({
  url: "https://www.omdbapi.com/?t=space+jam&y=&plot=short&apikey=trilogy",
  method: "GET",
}).then(function (response) {
  console.log(response);
  console.log(response.Runtime);
});

$.ajax({
  url: "https://www.omdbapi.com/?t=boiler+room&y=&plot=short&apikey=trilogy",
  method: "GET",
}).then(function (response) {
  console.log(response);
  console.log(response.Runtime);
});

$.ajax({
  url: "https://www.omdbapi.com/?t=inception&y=&plot=short&apikey=trilogy",
  method: "GET",
}).then(function (response) {
  console.log(response);
  console.log(response.Runtime);
});

$.ajax({
  url: "https://www.omdbapi.com/?t=the+dark+night&y=&plot=short&apikey=trilogy",
  method: "GET",
}).then(function (response) {
  console.log(response);
  console.log(response.Runtime);
});
// ------------------------------------------------------
$.ajax({
  url: "https://www.omdbapi.com/?t=the+batman&y=&plot=short&apikey=trilogy",
  method: "GET",
}).then(function (response) {
  console.log(response);
  console.log(response.Runtime);
});
$.ajax({
  url: "https://www.omdbapi.com/?t=the+planet+of+the+apes&y=&plot=short&apikey=trilogy",
  method: "GET",
}).then(function (response) {
  console.log(response);
  console.log(response.Runtime);
});
$.ajax({
  url: "https://www.omdbapi.com/?t=shark+tale&y=&plot=short&apikey=trilogy",
  method: "GET",
}).then(function (response) {
  console.log(response);
  console.log(response.Runtime);
});
