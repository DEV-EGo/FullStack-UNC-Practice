// $(document).ready(function () {
//   // Here we use jQuery to select the header with "click-me" as its ID.
//   // Notice I have the #click-me, click, and then the function
//   // So $("#id|.class|element").on("action", function(){});
//   // And so whenever it is clicked...
//   $("#click-me").on("click", function () {
//     alert("I've been clicked!");
//   });
// });

document.getElementById("demo").addEventListener("click", myFunction);

function myFunction() {
  document.getElementById("demo").innerHTML = "YOU CLICKED ME!";
}

document.getElementById("click-me").addEventListener("click", thisFunction);

function thisFunction() {
  document.getElementById("click-me").innerHTML = "this was clicked";
}
