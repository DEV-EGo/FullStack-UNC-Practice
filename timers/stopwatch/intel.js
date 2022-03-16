// This code will run as soon as page loads
window.onload = function () {
  $("#lap").on("click", recordLap);
  $("#stop").on("click", stop);
  $("#reset").on("click", reset);
  $("#start").on("click", start);
};

// variables that will hold the interval
var intervalId;

// prevent the clock from being sped up
var clockRunning = false;
var time = 0;
var lap = 1;

function reset() {
  time = 0;
  lap = 1;
}

function start() {
  // set interval to start the count here and set the clock clockRunning
  if (!clockRunning) {
  }
}

function stop() {
  // stops the count and set the clock to not be running
}

function recordLap() {
  // gets current time and passes that into thte timecoverter function
  // save the variables
}

function count() {
  // increment time by 1, remember we cant use "this" here
}

function timeCoverter(t) {
  // takes the current time in seconds and convert it to minute and second (mm:ss)

  var minutes = Math.floor(t / 60);
  var seconds = Math.floor(minutes * 60);

  if (seconds < 10) {
    seconds = "0" + seconds;
  }
  if (minutes === 0) {
    minutes = "00";
  } else if (minutes < 10) {
    minutes = "0" + minutes;
  }
  return minutes + ":" + seconds;
}
