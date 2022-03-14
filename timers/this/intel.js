// Variable that will hold the button alert timeout when it is closed
var delayButtonAlert;

// time out in javascript
// set the window alert to run 1 second after the time out  when its clicked
var windowTimeout = setTimeout(function () {
  alert("Alert #1: Called automatically 1 second after page load");
}, 1000);

// start on click
$("#start").on("click", function () {
  delayButtonAlert = setTimeout(function () {
    alert(" alert #2: called 3 seconds after the start button is clicked");
  }, 3000);
});

// cancel on click

$("#cancel").on("click", function () {
  clearTimeout(delayButtonAlert);
});

// cancel window alert on time
$("#window-cancel").on("click", function () {
  clearTimeout(windowTimeout);
});
