var movie = " Mr. Nobody";
var queryURL =
  "https://www.ombdapi.com/?t" + movie + "&y=&plot=short&apikey=trilogy";

$.ajax({
  url: queryURL,
  method: "GET",
}).then(function (response) {
  var tRow = $("<tr>");

  var titleTd = $().text(response.Title);
});
