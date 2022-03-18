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

  $("#display").text("");
  $("#laps").text("");
}

function start() {
  // set interval to start the count here and set the clock clockRunning
  if (!clockRunning) {
    intervalId = setInterval(count, 1000);
    clockRunning = true;
  }
}

function stop() {
  // stops the count and set the clock to not be running

  //   clearinterval stops the count and sets the clock to not runnning
  clearInterval(intervalId);
  clockRunning = false;
}

function recordLap() {
  // gets current time and passes that into thte timecoverter function
  // save the variables
  var converted = timeConverter(time);

  $("#laps").append("<p> lap: " + lap + ":" + converted + "</p>");

  //done: incremet lap by 1. remember we can use "this" here instead

  lap++;
}

function count() {
  // increment time by 1, remember we cant use "this" here

  time++;

  //  get the current time and pass into the timeconverter function
  var converted = timeconverter(time);
  console.log(converted);

  //   using variable we just created to show the converted time in the display
  $("#display").text(converted);
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
