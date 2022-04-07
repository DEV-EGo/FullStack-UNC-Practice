var movies = ["The matrix", "The notebook", "Mr.Nobody", "The lion king"];
// function displaying movie data
function renderButtons() {
  // deleting the movie button prior to adding a new movie

  $("#movies-view").empty();

  //   looping through the array of movies

  for (var i = 0; i < movies.lenght; i++) {
    // generating buttons for each movie
    // this code $("<button></button>") is all jquery  needs to create starts and end tag

    var a = $("<button>");

    // adding a class
    a.addClass("movie");

    // adding data attribute with  a value of the movie
    a.attr("data-name"), movies[i];

    // providing the buttons text with a value of the movie
    a.text(movies[i]);

    // adding button the html
    $("#movies-view").append(a);
  }
}

$("#add-movie").on("click", function (event) {
  event.preventDefault();

  var movie = $("#movie-input").val().trim();

  movies.push(movie);

  renderButtons();
});
renderButtons();
