'use strict';
// //Default Parameters
// const bookings = [];
// const createBooking = function (
//   flightNum,
//   numPassengers = 1,
//   price = 199 * numPassengers
// ) {
//   /*Before ES6
//   numPassengers = numpassengers||1;
//    */
//   const booking = {
//     flightNum,
//     numPassengers,
//     price,
//   };
//   console.log(booking);
//   bookings.push(booking);
// };
// createBooking('LH123');
// createBooking('LH123', 2, 800);
// createBooking('LH123', 2);
// createBooking('LH123', undefined, 2); //setting one undefined so that it takes the default value.

//Value VS Reference
// const flight = 'LH234';
// const hashim = {
//   name: 'Hashim Malik',
//   passport: 234567,
// };
// const checkIn = function (flightNum, passenger) {
//   flightNum = 'LH999';
//   passenger.name = 'Mr.' + passenger.name;

//   if (passenger.passport === 234567) {
//     alert('Checked In!');
//   } else {
//     alert('Wrong Passport!');
//   }
// };
// checkIn(flight, hashim);
// console.log(flight); //the value that we passed here is a primitive type and just the copy so the flightNum that we changed above is completely a new variable that is why the flight num did not change...
//same as writing const flightNum = flight;
// console.log(hashim); //It changed because object ia refrenced type so the memory reference is passed
//same as const passenger = hashim both point to the same object.

//JS doesnt have pass by reference although it seems to but that reference is actually a value in itself.

/*
First-Class Functions:
1. Fns are treated as first-class citizens.
2. Means fns are simply values.
3. Fns are just another type of object.
=> We can store fns in variables, we can pass fns as args to other fns, we can return fns from fns, we can also call methods on fns.

Higher Order Fns:
=> A fn that recieves another fn as an arg, that returns a new fn or both.
btnClose.addEventListner("Click,greet"), addEL is Higher-order and greet is callback as it will be called later.


//There are no first class fns in practice it's just a concept, however there are higher-order fns because the language supports first class fns.
*/

//Higher-order fns in practice
// const oneWord = function (str) {
//   return str.replace(/ /g, '').toLowerCase();
// };
// const upperFirstWord = function (str) {
//   const [first, ...others] = str.split(' ');
//   return [first.toUpperCase(), ...others].join(' ');
// };
// const transformer = function (str, fn) {
//   console.log(`Original String: ${str}`);
//   console.log(`Transformed String: ${fn(str)}`);
//   console.log(`Transformed by : ${fn.name}`);
// };
// transformer('Javascript is the best!', upperFirstWord);
// transformer('Javascript is the best!', oneWord);

//CallBacks help in abstraction,
//Transformer above is high order and upperFirstWord is callback.

//Fns returning Fns
// const greet = function (greeting) {
//   return function (name) {
//     console.log(`${greeting} ${name}`);
//   };
// };
// const greeterHey = greet('Hey'); //greet returned a new fn which we stored in greeterHey and we can use it now like normal fns.

// greeterHey('Hashim');
// greet('Hello')('Hashim');

//By arrow fn
// const greet = greeting => name => console.log(`${greeting} ${name}`);
// greet('Hello')('Hashim');

//Call and apply methods

// const lufthansa = {
//   airline: 'lufthansa',
//   iataCode: 'lH',
//   bookings: [],

//   book(flightNum, name) {
//     console.log(
//       `${name} booked a seat on ${this.airline} flight ${this.iataCode}${flightNum}`
//     );
//     this.bookings.push({ flight: `${this.iataCode}${flightNum}`, name });
//   },
// };
// lufthansa.book(239, 'Hashim Malik');
// console.log(lufthansa);

// const eurowings = {
//   airline: 'Eurowings',
//   iataCode: 'EW',
//   bookings: [],
// };

// const book = lufthansa.book;

// //Doesnt work as this keyword points to undefined.
// // book(23,'sarah')
// book.call(eurowings, 23, 'hashim'); //due to call method we can explicitly point "this" keyword to any object.
// console.log(eurowings);
// book.call(lufthansa, 34, 'suhail');
// console.log(lufthansa);

// //Apply method, same as call but it receives an array of args.
// const flightData = [583, 'Faisal'];
// book.apply(eurowings, flightData);
// console.log(eurowings);

// book.call(lufthansa, ...flightData);

// //Bind Method
// //same as call but this doesnot immediately call the fn rather returns a new fn where this keyword is bound.

// const bookEW = book.bind(eurowings);
// // returns a fn in which this is always bound to eurowings
// bookEW(23, 'Steven');
// console.log(eurowings);

// const bookEW23 = book.bind(eurowings, 23); //we can set it for a default value, partial aaplication.
// bookEW23('juni'); //it only needs one arg now.

// //With Event listeners
// lufthansa.planes = 300;
// lufthansa.buyPlane = function () {
//   console.log(this); //'this' keyword in handler fn always points to the element on which the handler is attached to, here button.

//   this.planes++;
//   console.log(this.planes);
// };
// document
//   .querySelector('.buy')
//   .addEventListener('click', lufthansa.buyPlane.bind(lufthansa)); //bind applied so that 'this' will point to lufthansa.

// //Partial Application(Pre-setting parameters)

// const addTax = (rate, value) => value + value * rate;
// console.log(addTax(0.1, 200));

// const addVAT = addTax.bind(null, 0.23);
// console.log(addVAT(100));

//Immediately Invoked Fn Expressions (IIFE)
//Sometimes we need a fn which needs to be executed only once.

// (function () {
//   console.log('This will run only once!');
// })();

// (() => console.log('This will run only once!'))();
// //This was created to create scopes but we dont use them, as we can create a scope using {}, unless we have to use var because var doesnt create its scope. But if we need to invoke a fn once then IIFE are stil in use.

// {
//   const isPrivate=23;
//   var notPrivate =45;
// }
// // console.log(isPrivate);
// console.log(notPrivate);

//Closures

/*
=> A closure is the closed-over variable envirionment of the execution context in which a fn was created, even after that ex context is gone.
=> A closure gives a fn access to all the variables of its parent fn, even afte that parent fn has returned. The fn keeps a reference to its outer scope, which preserves the scope chain throughout time.
=> A closure makes sure that a fn doesnt loose connection to variables tha existed at the fns birth place.
=> We dont have to manually create closures, this is a js feature that happens automatically, we cant even access closed-over variables explicitly. A closure is not a tangible js object.
*/
const secureBooking = function () {
  let passengerCount = 0;

  return function () {
    passengerCount++;
    console.log(`${passengerCount}passengers`);
  };
};
const booker = secureBooking();
booker();
booker();
booker();
//The securebooking fns exe context is popped out of the stack but the passenger count is still accessible.

//Examples of closures
//1
let f;
const g = function () {
  const a = 23;
  f = function () {
    console.log(a * 2);
  };
};
const h = function () {
  const b = 777;
  f = function () {
    console.log(b * 2);
  };
};
g();
f();
console.dir(f);

h();
f();
console.dir(f);

//2
const boardPassengers = function (n, wait) {
  const perGroup = n / 3;

  setTimeout(function () {
    console.log(`We are now boarding all ${n} passengers `);
    console.log(`There are 3 groups, each with ${perGroup} passengers`);
  }, 3000);

  console.log(`Will start boarding in ${wait} seconds`);
};
const perGroup=1000;//it still used the n/3 as closure has priority over scope chain.
boardPassengers(180, 3);
//Timeout fn is executed independently but still has access to the variables, showing a closure.