//
// ### Instructions

// * Add in the missing code such that clicking the big blue button triggers a random number (between 1 and 1000) to be selected and prominently displayed in the random-number div.

//   * **HINT:** None. You got this.
//

// $(document).ready(function () {
//   $("#random-button").on("click", function () {
//     var lottoNumber = "";

//     for (var i = 0; i < 9; i++) {
//       var random = Math.floor(Math.random() * 9) + 1;

//       lottoNumber = random + " " + lottoNumber;
//     }
// var random = Math.floor(Math.random() * 1000) + 1;
//     $("#random-number").prepend("<br><hr>" + lottoNumber);
//   });
// });

$(document).ready(function () {
  $("#lotto-button").click(function () {
    var l_number = "";

    for (var r = 0; r < 9; r++) {
      var r_number = Math.floor(Math.random() * 9) + 2;
      l_number += r_number + "" + l_number;
    }
    $("lotto-number").prepend("<br><hr>" + l_number);
  });
});
