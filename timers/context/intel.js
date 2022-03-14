// Define a person and include a method that logs name with a greeting
var person = {
  name: "jeff",
  sayHi: function () {
    console.log("Hi, im " + this.name + "!");
    console.log(this);
  },
};

// when we run it normally
person.sayHi();

// hi im jeff
// if we include it in a time out
setTimeout(person.sayHi, 50);

// we get the following
// hi im
// window object
