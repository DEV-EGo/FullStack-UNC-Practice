// Generic function for capturing the movie name from the data-attribute
function alertMovieName() {
  // YOUR CODE GOES HERE!!!
}
// Initial array of movies
var movies = ["The Matrix", "The Notebook", "Mr. Nobody", "The Lion King"];

// Function for displaying movie data
function renderButtons() {
  // Deleting the movie buttons prior to adding new movie buttons
  // (this is necessary otherwise we will have repeat buttons)
  $("#movies-view").empty();

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
    $("#movies-view").append(a);
  }
}

// This function handles events where one button is clicked
$("#add-movie").on("click", function (event) {
  // event.preventDefault() prevents the form from trying to submit itself.
  // We're using a form so that the user can hit enter instead of clicking the button if they want
  event.preventDefault();

  // This line will grab the text from the input box
  var movie = $("#movie-input").val().trim();
  // The movie from the textbox is then added to our array
  movies.push(movie);

  // calling renderButtons which handles the processing of our movie array
  renderButtons();
});

// Function for displaying the movie info
// We're adding a click event listener to all elements with the class "movie"
// We're adding the event listener to the document itself because it will
// work for dynamically generated elements
// $(".movies").on("click") will only add listeners to elements that are on the page at that time
$(document).on("click", ".movie", alertMovieName);

// Calling the renderButtons function at least once to display the initial list of movies
renderButtons();
