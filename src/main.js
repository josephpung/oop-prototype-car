// Phase I

/*
* You should make you completed
* each task step by step. Once you're done with one `Step`
* be sure to comment the previous console.log
* so you don't have tornado of console.logs
*/

// // Step 0 - require / import the carFn file
var Car = require('../src/Car')
var test = new Car('Acura', 'Integra', 1999, 'Red', 4)
// // Step 1 - Checking all properties
// console.log the `Car` object, does it returns all the properties requested?
console.log(test.make);
// // Step 2 - Run `Car.sell()` function
// `Car` object should be able to run `sell` function,
// and updates its existing object
console.log(test.sell("Joseph"))
// // Step 3 - Run `Car.paint()` function
// `Car` object should be able to run `paint` function,
// and updates its existing object
console.log(test.paint("green"));

// Phase II

// // Repeat the same steps to Phase I, but this time require the the class file
// // instead of the the `carFn` file


// Phase III
