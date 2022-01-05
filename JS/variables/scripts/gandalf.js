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
