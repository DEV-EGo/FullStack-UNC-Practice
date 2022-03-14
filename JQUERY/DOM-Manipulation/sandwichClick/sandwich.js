// This document.ready isn't necessary in this example... but is needed in cases where the HTML is complex.
// This code makes sure that the JavaScript doesn't get run until the HTML is finished loading
// It's useful to become familiar with now.

$(document).ready(function () {
  // VARIABLES
  // ====================================================================
  // Here we create variables for tracking the number of sandwiches eaten
  // ...

  var pbjCounter = 0;
  var grilledcheeseCounter = 0;
  var roastbeefCounter = 0;

  // ...
  // FUNCTIONS
  // ====================================================================
  // Here we create various on "click" functions which capture the clicks
  // Inside each click event is the code to create an alert, update the counter, then show the updated count.
  // ...
  // ...

  $("#pbj").on("click", function () {
    alert("mmmmmm peanut butter jelly time");
    pbjCounter++;
    alert("you just ate" + pbjCounter + " PB&J sandwich");
  });

  $("#grilledcheese").on("click", function () {
    alert(" yummy yumm yumm");
    grilledcheeseCounter++;
    alert("you ate " + grilledcheeseCounter + "Grilled Cheese sandwiches");
  });

  $("#roastbeef").on("click", function () {
    roastbeefCounter++;
    alert("you ate" + roastbeefCounter + "roast beef sandwiches");
  });
});

// =================================================================

$(document).ready(function () {
  var AppleCounter = 0;
  var GalaxyCounter = 0;
  var ForeignCounter = 0;

  $("#apple").on("click", function () {
    alert(" steve jobs");
    AppleCounter++;
    alert("you bought " + AppleCounter + " apple devices");
    $(
      "#P-div".html(
        "<img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRHRPJjtCA83HUNw2D_T0a5docDT7VeOr2L1u-uCUXgF_M-6i_mBj8RngPvIYfWhandvrQ&usqp=CAU' />"
      )
    );
  });

  $("#samsung").on("click", function () {
    alert(" Galaxy");
    GalaxyCounter++;
    alert("you bought " + GalaxyCounter + " samsung devices");

    $("#P-div").html(
      "<img src='https://www.google.com/url?sa=i&url=https%3A%2F%2Fbgr.com%2Ftech%2Fapple-will-release-more-new-products-in-2022-than-ever-before%2F&psig=AOvVaw1PhcIIB9dB7BLmg0alwuro&ust=1645639299578000&source=images&cd=vfe&ved=0CAsQjRxqFwoTCLCE5KLyk_YCFQAAAAAdAAAAABAE' />"
    );
  });

  $("#Huawei").on("click", function () {
    alert("Off the grid phone");
    ForeignCounter++;
    alert("you bought " + ForeignCounter + " devices ");

    $("P-div").html(
      "<img src='data:image/jpeg;base64,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/>"
    );
  });
});
