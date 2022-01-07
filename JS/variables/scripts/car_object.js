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
};
