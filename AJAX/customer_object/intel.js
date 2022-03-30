var customer = {
  firstName: "bobby",
  lastName: "ricky",
  age: 25,

  adress: {
    streetAdress: "Jhon",
    city: "New York",
    State: "NY",
    postalCode: "10021",
  },

  phoneNumber: [
    {
      type: "home",
      number: "704121213131",
    },
    {
      type: "cell",
      number: "917412344",
    },
  ],
};

// step 1: loging the first name below using console log
console.log(customer.firstName);
// step 2: loging the last name
console.log(customer.lastName);
// step 3: Log the state of the adress below using console log
console.log(customer.adress.State);
// step 4: log the home phone number below using console log
console.log(customer.phoneNumber[0].number);
// step 5: log the fax number
console.log(customer.phoneNumber[1].number);

var battlebuddies = {
  testName: " doom ",
  testLastName: " strange",
  age: 28,
  newAdress: {
    newStreetAdress: " trap house",
    newCity: " charlotte",
    newState: " NC",
    newPostalCode: " 28227",
  },

  newPhoneNumber: [
    {
      newType: "home",
      Newnumber: "7023703270",
    },
    {
      newType: "lair",
      Newnumber: "837374747",
    },
  ],
};

console.log(battlebuddies.testName);
console.log(battlebuddies.testLastName);
console.log(battlebuddies.newAdress.newStreetAdress);
console.log(battlebuddies.newPhoneNumber[0].Newnumber);
console.log(battlebuddies.newPhoneNumber[1].Newnumber);
