var APIkey = "ff3263b38497346c98ed294855f516ed";

// building a url to query the data
var queryURL =
  "https://api.openweathermap.org/data/2.5/weather?q=Bujumbura,Burundi&appid=" +
  APIkey;

//   creating ajax call
$.ajax({
  url: queryURL,
  method: "GET",
}).then(function (response) {
  console.log(queryURL);

  // log the result
  console.log(response);

  //   transfer the content to html

  $(".city").html("<h1>" + response.name + " weather details</h1>");
  $(".wind").text("wind speed: " + response.wind.speed);
  $(".humidity").text("Humidity: " + response.main.humidity);
  $(".temp").text("Temperature (f) " + response.main.temp);

  //   log the data in the console as well
  console.log("wind speed:" + response.wind.speed);
  console.log("Humidity: " + response.main.humidity);
  console.log("Temperature (F): " + response.main.temp);
});
