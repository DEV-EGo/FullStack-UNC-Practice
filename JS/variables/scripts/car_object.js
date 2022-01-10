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
    this.isWorking();
  },

  Honk: function () {
    alert(" H O N K !");
  },
};
