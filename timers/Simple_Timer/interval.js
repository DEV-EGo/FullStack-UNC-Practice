// interval demonstration
// set our number counter to 100

var number = 100;

// variable that will hold the id of interval when its executed
// the "run" function

var intervalId;

// when the stop button is clicked it will stop the function
$("#stop").on("click", stop);

// when the resumer button gets clicked , execute the function
$("#resume").on("click", run);
