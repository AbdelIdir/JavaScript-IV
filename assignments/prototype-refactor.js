/* 

Prototype Refactor

1. Copy and paste your code or the solution from yesterday

2. Your goal is to refactor all of this code to use ES6 Classes. The console.log() statements should still return what is expected of them.

*/

// Person.prototype.eat = function(food) {
//     if (this.stomach.length >= 10) {
//       return " im ok";
//     }
//     return this.stomach.push(food);
//   };

//   Person.prototype.poop = function() {
//     return (this.stomach = []);
//   };

//   Person.prototype.toString = function() {
//     return `My name is: ${this.name}, I am ${this.age} years old.`;
//   };

class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
    this.stomach = [];
  }
  eat() {
    if (this.stomach.length >= 10) {
      return " im ok";
    }
    return this.stomach.push(food);
  }

  poop() {
    return (this.stomach = []);
  }

  toString() {
    return `My name is: ${this.name}, I am ${this.age} years old.`;
  }
}

/*
    TASK 2
      - Write a Car constructor that initializes `model` and `milesPerGallon` from arguments.
      - All instances built with Car:
          + should initialize with an `tank` at 0
          + should initialize with an `odometer` at 0
      - Give cars the ability to get fueled with a `.fill(gallons)` method. Add the gallons to `tank`.
      - Give cars ability to `.drive(distance)`. The distance driven:
          + Should cause the `odometer` to go up.
          + Should cause the the `tank` to go down taking `milesPerGallon` into account.
      - A car which runs out of `fuel` while driving can't drive any more distance:
          + The `drive` method should return a string "I ran out of fuel at x miles!" x being `odometer`.
  */

class Car {
  constructor(model, milesPerGallon) {
    this.model = model;
    this.milesPerGallon = milesPerGallon;
    this.tank = 0;
    this.odometer = 0;
  }

  fill(gallons) {
    return (this.tank = this.tank + gallons);
  }

  drive(distance) {
    const driveabledistance = this.milesPerGallon * this.tank;
    const fuelNeededtoCoverDistance = distance / this.milesPerGallon;
    if (this.tank < fuelNeededtoCoverDistance && this.tank > 0) {
      this.odometer += driveabledistance;
      this.tank = 0;
      return "I ran out of fuel at" + this.odometer + "miles!";
    }

    this.odometer += distance;
    this.tank -= fuelNeededtoCoverDistance;
  }
}

// Car.prototype.fill = function(gallons) {
//   return (this.tank = this.tank + gallons);
// };

// Car.prototype.drive = function(distance) {
//   const driveabledistance = this.milesPerGallon * this.tank;
//   const fuelNeededtoCoverDistance = distance / this.milesPerGallon;
//   if (this.tank < fuelNeededtoCoverDistance && this.tank > 0) {
//     this.odometer += driveabledistance;
//     this.tank = 0;
//     return "I ran out of fuel at" + this.odometer + "miles!";
//   }

//   this.odometer += distance;
//   this.tank -= fuelNeededtoCoverDistance;
// };

/*
    TASK 3
      - Write a Baby constructor subclassing Person.
      - Besides `name`, Baby takes a second argument to initialize `favoriteToy`.
      - Besides the methods on Person.prototype, babies have the ability to `.play()`:
          + Should return a string "Playing with x", x being the favorite toy.
  */

// function Baby(name, favoriteToy, age) {
//   Person.call(this, name, age);

//   this.favoriteToy = favoriteToy;
// }
// Baby.prototype = Object.create(Person.prototype);

// Baby.prototype.play = function() {
//   return `Playing with ${this.favoriteToy}`;
// };

class Baby extends Person {
  constructor(name, favoriteToy, age) {
    super(name, age);
    this.favoriteToy = favoriteToy;
  }
  play() {
    return `My name is ${this.name}, I am ${this.age} and I am PLaying with a ${this.favoriteToy}`;
  }
}

const child = new Baby("georgy", "yoyo", "3");
console.log(child.play());
