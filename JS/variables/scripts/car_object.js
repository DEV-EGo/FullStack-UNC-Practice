var DriftMissile = {
  make: "Toyota",
  model: "Subaru",
  color: "Khaki",
  miles: 70000,
  isWorking: true,

  Daily_drive: function () {
    alert(" old mileage: " + this.miles);
    this.miles = this.miles + 8;
  },

  DriveAround: function () {
    alert(" old mileage: " + this.miles);
    alert(" car needs tune up ");
    this.isWorking;
  },

  TuneUpRequired: function () {
    alert(" You need a tune up");
    this.isWorking;
  },

  Honk: function () {
    alert(" H O N K !");
  },
};

// How would we log...

// The car's make?
console.log(DriftMissile.make);

// The car's model?
console.log(DriftMissile.model);

// The car's mileage?
console.log(DriftMissile.miles);

// How would we run the car's driveToWork method?
DriftMissile.Daily_drive();
// How would we run the car's driveAroundWorld method?
DriftMissile.DriveAround();
// How would we run the getTuneUp method?
DriftMissile.TuneUpRequired();

console.log("==========================");

// FUNCTIONS
// ==============================================================================

var launch = {
  Rocket: " Rocket Ship",
  Space_Company: " Space X",
  Orbit: " Milky Way",
  Distance_InSpace: 100000,
  LaunchSucess: true,

  Orbital_Distance: function () {
    alert(this.Distance_InSpace + " away from the earth");

    this.Distance_InSpace = this.Distance_InSpace + 24000;

    alert(this.Distance_InSpace + " away from orbit, after launch");

    alert(" we in space");

    this.LaunchSucess = false;
  },

  getInSpace: function () {
    alert("Ready for launch");
    this.LaunchSucess = true;
  },

  BlastOff: function () {
    alert(" take off");
  },
};

//

var RockNRoll = {
  Band: "Guns N Roses",
  Guitarist: "Slash",
  Tour: "North America",
  Show_Time: 4,
  LetsRock: true,

  concertHour: function () {
    alert(" concert starts at " + Show_Time);

    this.Show_Time = Show_Time + 2;

    alert(" the concert was " + Show_Time);
  },

  rockstar: function () {
    alert(" presenting the best guitarist in the world" + Guitarist);
    this.LetsRock = true;
  },

  venue: function () {
    alert(" This is the " + Tour);
    this.LetsRock = true;
  },
};

// Logs all of our car's current stats to the console.
function re_set_stats() {
  console.log("Band" + RockNRoll.Band);
  console.log("Guitarist" + RockNRoll.Guitarist);
  console.log("Tour" + RockNRoll.Tour);
  console.log("Show Time" + RockNRoll.Show_Time);
  console.log(" You ready to rock ?! " + RockNRoll.LetsRock);
}

function CurrentStatus() {
  console.log(" Rocket: " + launch.Rocket);
  console.log(" Space: " + launch.Space_Company);
  console.log(" Orbit: " + launch.Orbit);
  console.log(" Distance in space " + launch.Distance_InSpace);
  console.log(" Launch is a success!" + Launch.Success);
  console.log(
    "================================================================"
  );
}

// MAIN PROCESS
// ==============================================================================
document.onkeyup = function (event) {
  var keythisletter = event.key.toLowerCase();
  if (keythisletter === "b") {
    RockNRoll.concertHour();
    re_set_stats();
  }

  if (keythisletter === "n") {
    RockNRoll.rockstar();
    re_set_stats();
  }
  if (keythisletter === "m") {
    RockNRoll.venue();
    re_set_stats();
  }
};

//
// document.onkeyup = function (event) {
// capturing key pressed, also converts it into lowercase
//   var letter = event.key.toLowerCase();

//  if the letter is h, calling function
//   if (letter === "h") {
//     launch.BlastOff;
//     CurrentStatus();
//   }

//   if the letter is d, calling function
//   if (letter === "d") {
//     launch.getInSpace();
//     CurrentStatus();
//   }

//if the letter is t, calling function
//   if (letter === "t") {
//     launch.Orbital_Distance;
//     CurrentStatus();
//   }
// };
