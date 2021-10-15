var usertext = document.getElementById("user-text");
document.onkeyup = function (event) {
  usertext.textContent = event.key;
};

var user_text_2 = document.getElementById("user-text-2");
document.onkeyup = function (event) {
  user_text_2.textContent = event.key;
};
