// Initial array of movies
var movies = ["The Matrix", "The Notebook", "Mr. Nobody", "The Lion King"];

function displayMovieInfo() {
  // YOUR CODE GOES HERE!!! HINT: You will need to create a new div to hold the JSON.

  var movie = $(this).attr("data-name");
  var queryURL =
    "https://www.ombdapi.com/?t=" + movie + "&y=&plot=short&apikey=trilogy";

  $.ajax({
    url: queryURL,
    method: "GET",
  }).then(function (response) {
    // creating div to hold movie
    var movieDiv = $("< div class = 'movie'>");

    // storing the rating data
    var pOne = $("<p>").text("Rating:" + rating);

    // Displaying the rating
    movieDiv.append(POne);

    // storing the release year of movie
    var released = response.Released;

    // Creating element to hold the release year
    var pTwo = $("<p>").text("Released:" + released);

    // displaying
    movieDiv.append(pTwo);

    // storing the plot
    var plot = response.Plot;

    // creating an element to hold the plot
    var pThree = $("<p>").text("Plot : " + plot);

    // appending the plot
    movieDiv.append(pThree);

    // retrieving URL of image
    var imgURL = response.Poster;

    // creating an element to hold img
    var image = $("<img>").attr("src", imgURL);

    // appending image
    movieDiv.append(image);

    // putting the entire movie about the previous movie
    $("#movies-view").prepend(movieDiv);
  });
}

// Function for displaying movie data
function renderButtons() {
  // Deleting the movie buttons prior to adding new movie buttons
  // (this is necessary otherwise we will have repeat buttons)
  $("#buttons-view").empty();

  // Looping through the array of movies
  for (var i = 0; i < movies.length; i++) {
    // Then dynamicaly generating buttons for each movie in the array.
    // This code $("<button>") is all jQuery needs to create the start and end tag. (<button></button>)
    var a = $("<button>");
    // Adding a class
    a.addClass("movie");
    // Adding a data-attribute with a value of the movie at index i
    a.attr("data-name", movies[i]);
    // Providing the button's text with a value of the movie at index i
    a.text(movies[i]);
    // Adding the button to the HTML
    $("#buttons-view").append(a);
  }
}

// This function handles events where one button is clicked
$("#add-movie").on("click", function (event) {
  event.preventDefault();

  // This line will grab the text from the input box
  var movie = $("#movie-input").val().trim();
  // The movie from the textbox is then added to our array
  movies.push(movie);

  console.log(movies);
  // calling renderButtons which handles the processing of our movie array
  renderButtons();
});

// Function for displaying the movie info
// We're adding a click event listener to all elements with the class "movie"
// We're adding the event listener to the document itself because it will
// work for dynamically generated elements
// $(".movies").on("click") will only add listeners to elements that are on the page at that time
$(document).on("click", ".movie", displayMovieInfo);

// Calling the renderButtons function at least once to display the initial list of movies
renderButtons();
