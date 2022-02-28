$(document).ready(function () {
  var Com_pick = Math.floor(Math.random() * 4) + 1;
  var lock_Game = false;

  // logging computer choice in the console
  console.log("computer pick" + Com_pick);

  //click event that triggers the users pick event

  $(".btn-choice").on("click", function () {
    // lockgame line prevents user from changing his options
    if (lock_Game != true) {
      // retrieving the value associated with the button the user picked
      var youPick = $(this).val();
      console.log("you pick " + youPick);

      // revealing computer pick inside the HTML
      $("#computer-pick").text(Com_pick);

      // if user pick matches the computer pick you let them know
      if (parseInt(youPick) === Com_pick) {
        $("#result").text(" yep you got it ! click refresh to play again");
        lock_Game = true;
      } else {
        $("#result").text(" nope. refresh play again");
        lock_Game = false;
      }
    }
  });
});
