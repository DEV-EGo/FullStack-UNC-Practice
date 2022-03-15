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

// the run functino set interval
// that runs the decrement function once a seconds
function run() {
  clearInterval(intervalId);
  intervalId = setInterval(decrement, 1000);
}

// ==== decrement function
function decrement() {
  // decrease number
  number--;

  //   show number inside the #show-number div

  $("#show-number").html("<h2>" + number + "</h2>");

  //   once number hits 0

  if (number === 0) {
    // run stop function
    stop();

    // alert user the time is up
    alert("time is up");
  }
}

function stop() {
  // clear our intervalId
  // pass the name of the interval , clear the function

  clearingInterval(intervalId);
}

run();
