var customer = {
  firstName: "test",
  lastName: "last name test",
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
      type: "",
      number: "",
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
