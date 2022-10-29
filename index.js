// 👇 COMPLETE YOUR WORK BELOW 👇
/* ❗❗ NOTE: PLEASE USE INDIVIDUAL KEYS FOR YOUR CONSTRUCTOR PARAMETERS, NOT OBJECTS. THE TESTS WILL NOT PASS WITH OBJECTS. ❗❗  */

/*
  TASK 1
    - Write a Person Constructor that initializes `name` and `age` from arguments.
    - All instances of Person should initialize with an empty `stomach` array.
    - Give instances of Person the ability to `.eat("someFood")`:
        + .eat() should recieve a string as a parameter and take some type of edible as an argument
        + When eating an edible, it should be pushed into the `stomach` array.
        + The `eat` method should have no effect if there are 10 items in the `stomach` array.
    - Give instances of Person the ability to `.poop()`:
        + When an instance poops, its `stomach` array should be empty.
    - Give instances of Person a method `.toString()`:
        + It should return a string with `name` and `age`. Example: "Mary, 50"
*/


function Person(name, age) {
  this.name = name;
  this.age = age;
  this.stomach = [];
}

// - Give instances of Person the ability to `.eat("someFood")`:
//         + .eat() should recieve a string as a parameter and take some type of edible as an argument
//         + When eating an edible, it should be pushed into the `stomach` array.
//         + The `eat` method should have no effect if there are 10 items in the `stomach` array.

Person.prototype.eat = function (someFood) {
  if(this.stomach.length < 10){
    this.stomach.push(someFood);
  }
}
// - Give instances of Person the ability to `.poop()`:
//         + When an instance poops, its `stomach` array should be empty.
Person.prototype.poop = function (){
  this.stomach = [];
}
// - Give instances of Person a method `.toString()`:
//         + It should return a string with `name` and `age`. Example: "Mary, 50"
Person.prototype.toString = function (){
  return `${this.name}, ${this.age}`;
}
//`name` and `age`. Example: "Mary, 50"
const mary = new Person('Mary', 50);
console.log (mary.toString());
mary.eat('Bulgogi'); //.eat(someFood)
console.log (mary.stomach);


/*
  TASK 2
    - Write a Car constructor that initializes `model` and `milesPerGallon` from arguments.
    - All instances built with Car:
        + should initialize with an `tank` at 0
        + should initialize with an `odometer` at 0
    - Give cars the ability to get fueled with a `.fill(gallons)` method
      + should take 'gallons' as an parameter which will take number of gallons as an argument
      + should add the gallons to `tank`.
    - STRETCH: Give cars ability to `.drive(distance)`. The distance driven:
        + Should cause the `odometer` to go up.
        + Should cause the the `tank` to go down taking `milesPerGallon` into account.
    - STRETCH: A car which runs out of `fuel` while driving can't drive any more distance:
        + The `drive` method should return a string "I ran out of fuel at x miles!" x being `odometer`.
*/
// - Write a Car constructor that initializes `model` and `milesPerGallon` from arguments.
// - All instances built with Car:
//         + should initialize with an `tank` at 0
//         + should initialize with an `odometer` at 0
function Car(model, milesPerGallon) {
  this.model = model;
  this.milesPerGallon = milesPerGallon;
  this.tank = 0;
  this.odometer = 0;
}

// - Give cars the ability to get fueled with a `.fill(gallons)` method
//       + should take 'gallons' as an parameter which will take number of gallons as an argument
//       + should add the gallons to `tank`.
Person.prototype.eat = function (someFood) {
  if(this.stomach.length < 10){
    this.stomach.push(someFood);
  }
}

Car.prototype.fill = function (gallons) {
  this.tank = gallons + this.tank; //should add the gallons to `tank`.
}



/*
  TASK 3
    - Write a Baby constructor subclassing Person.
    - Besides `name` and `age`, Baby takes a third argument to initialize `favoriteToy`.
    - Besides the methods on Person.prototype, babies also have the ability to `.play()`:
        + Should return a string "Playing with x", x being the favorite toy.
*/

// `name` and `age`, Baby takes a third argument to initialize `favoriteToy`
function Baby(name, age, favoriteToy) {
  Person.call (this, name, age); //Baby constructor subclassing Person.
  this.favoriteToy = favoriteToy;
}

// - Besides the methods on Person.prototype, babies also have the ability to `.play()`:
// + Should return a string "Playing with x", x being the favorite toy.

Baby.prototype = Object.create(Person.prototype);
Baby.prototype.play = function () {
  return `Playing with ${this.favoriteToy}, ${this.favoriteToy} being the favorite toy.`
}


/* 
  TASK 4
  In your own words explain the four principles for the "this" keyword below:
  1. Window/Global Object Binding - If we don't tell what 'this' is, it will return the window to us, the global object in node or undefined in strict mode.
  2. Implicit Binding - it apply to objects with methods. When the function is invoked, uses to the left of the dot - the object before the dot.
  3. New binding - It is used with constructor functions. when a function is invoked as a constructor function using the 'new' keyword 'this' points to the newly created object. 
  4. Explicit binding - explicitly pass in as an argument what we want 'this' to refer to. We can use .call(), .apply(), .bind() 
*/

///////// END OF CHALLENGE /////////

/* 🛑🛑🛑🛑🛑🛑🛑🛑🛑🛑 Please do not modify anything below this line 🛑🛑🛑🛑🛑🛑🛑🛑🛑🛑 */
function foo(){
  console.log('its working!');
  return 'bar';
}
foo();
module.exports = {
  foo,
  Person, 
  Car,
  Baby
}
