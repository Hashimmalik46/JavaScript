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
