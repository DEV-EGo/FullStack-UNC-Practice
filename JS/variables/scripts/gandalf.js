var gandalf = {
  "real name": "Gandalf",
  "age (est)": 11000,
  race: "Maia",
  haveRetirementPlan: true,
  aliases: [
    "Greyhame",
    "Stormcrow",
    "Mithrandir",
    "Gandalf the Grey",
    "Gandalf the White",
  ],
};
// accesing properties with "bracket notation"
// alert("my name is " + gandalf["real name"]);

// second way to acess property using "dot notation"
if (gandalf.haveRetirementPlan) {
  // or creating a variable that matches the name of property

  var ageProperty = "age (est)";
  var years = gandalf[ageProperty]; ///"gandalf property + "age (est)"
  alert("my 401k has gathered interest for " + years + "years!");
}

// acessing array & porperty from an ibject
alert(" i have more than " + gandalf.aliases.length + " aliases ");
/////////////// displays number of items in string

// non-existant properties returned modified
alert("my designation is " + gandalf[" designation"]);

// ===============================
var gt86 = {
  Brand: "Scion",
  Year: 2016,
  Model: "F-rs",
  coupe: true,
  buildType: ["Drift car", "Street Car", "Drag Car", "Stance Car"],
};

alert(" i drive a " + gt86["Brand"]);

if (gt86.coupe) {
  var yearcar = "Year";
  var Model = gt86[yearcar];
  alert(" this is a " + Model + "Street");
}

alert(" i have a " + gt86.length + " coupe");

alert("" + gt86 + "");
