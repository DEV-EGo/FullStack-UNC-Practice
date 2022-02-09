var targetID = document.getElementById("empty-div");
// using "textcontent" method to change content inside the div
targetID.textContent = "Hello Motto";
// adding to the div and replacing what was already inside the div
targetID.textContent = " top of the morning to you";

// creating a new div "newDiv"
var newDiv = document.createElement("div");
// inserting text inside the new div
newDiv.textContent = " this is a new div";
//using the "appendchild" method to combine both of the divs on the page
targetID.appendChild(newDiv);
