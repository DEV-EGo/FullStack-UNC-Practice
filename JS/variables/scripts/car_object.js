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
