// The below code fills in the first row of the table
var movie = "Mr. Nobody";
var queryURL =
  "https://www.omdbapi.com/?t=" + movie + "&y=&plot=short&apikey=trilogy";

$.ajax({
  url: queryURL,
  method: "GET",
}).then(function (response) {
  // Create a new table row element
  var tRow = $("<tr>");

  // Methods run on jQuery selectors return the selector they we run on
  // This is why we can create and save a reference to a td in the same statement we update its text
  var titleTd = $("<td>").text(response.Title);
  var yearTd = $("<td>").text(response.Year);
  var actorsTd = $("<td>").text(response.Actors);

  // Append the newly created table data to the table row
  tRow.append(titleTd, yearTd, actorsTd);
  // Append the table row to the table body
  $("tbody").append(tRow);
});

var movie = "The Little Mermaid";
var queryURL =
  "https://www.omdbapi.com/?t=" + movie + "&y=&plot=short&apikey=trilogy";

$.ajax({
  url: queryURL,
  method: "GET",
}).then(function (response) {
  var tBody = $("tbody");
  var tRow = $("<tr>");
  // Methods run on jQuery selectors return the selector they we run on
  // This is why we can create and save a reference to a td in the same statement we update its text
  var titleTd = $("<td>").text(response.Title);
  var yearTd = $("<td>").text(response.Year);
  var actorsTd = $("<td>").text(response.Actors);
  // Append the newly created table data to the table row
  tRow.append(titleTd, yearTd, actorsTd);
  // Append the table row to the table body
  tBody.append(tRow);
});

var movie = "The Lion King";
var queryURL =
  "https://www.omdbapi.com/?t=" + movie + "&y=&plot=short&apikey=trilogy";

$.ajax({
  url: queryURL,
  method: "GET",
}).then(function (response) {
  var tBody = $("tbody");
  var tRow = $("<tr>");
  // Methods run on jQuery selectors return the selector they we run on
  // This is why we can create and save a reference to a td in the same statement we update its text
  var titleTd = $("<td>").text(response.Title);
  var yearTd = $("<td>").text(response.Year);
  var actorsTd = $("<td>").text(response.Actors);
  // Append the newly created table data to the table row
  tRow.append(titleTd, yearTd, actorsTd);
  // Append the table row to the table body
  tBody.append(tRow);
});
//   nombre - social last 4 - address - 425146411 archive number - explanation - copy of social and license
//   PO box 2000 chester pensilvania 19016
