var usertext = document.getElementById("user-text");
document.onkeyup = function (event) {
  usertext.textContent = event.key;
};
