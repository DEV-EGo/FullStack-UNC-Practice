// simple timer practice

// step:1
// using Audio file saved in folder
var audio = new Audio("raven.mp3");
audio.load();

// step:2
//  after 5 seconds, execute the fiveSeconds function
//  after 10 seconds, execute the tenSeconds function
//  after 15 seconds, execute the timeUp function

setTimeout(fiveSecond, 1000 * 5);
setTimeout(tenSecond, 1000 * 10);
setTimeout(timeUp, 1000 * 15);

// step 3

function fiveSeconds() {
  // calling time-left id and adding h2 saying 10 seconds Left

  $("#time-left").append("<h2>About 10 seconds left! </h2>");
  console.log("10 seconds left");
}

function tenSeconds() {
  // adding h2 element which will alert 5 seconds left
  $("time-left").append("<h2> about 5 seconds left! </h2>");
  console.log("5 seconds left");
}
