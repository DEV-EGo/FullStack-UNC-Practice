var movie = " Mr. Nobody";
var queryURL =
  "https://www.ombdapi.com/?t" + movie + "&y=&plot=short&apikey=trilogy";

$.ajax({
  url: queryURL,
  method: "GET",
}).then(function (response) {
  var tRow = $("<tr>");

  var titleTd = $("<td>").text(response.Title);
  var yearTd = $("<td>").text(response.Year);
  var actorsTd = $("<td>").text(response.Actors);

  tRow.append(titleTd, yearTd, actorsTd);

  // append the table row to the table row
  $("tbody").append(tRow);
});
