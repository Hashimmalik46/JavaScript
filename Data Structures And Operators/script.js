'use strict';
/*
const restaurant = {
  name: 'Classico Italiano',
  location: 'Via Angelo Tavanti 23, Firenze, Italy',
  categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
  starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
  mainMenu: ['Pizza', 'Pasta', 'Risotto'],

  order: function (starterIndex, mainIndex) {
    return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
  },
};
//Destructuring: Breaking down a complex data structure into a smaller data structure.
const arr = [2, 3, 4];
// const a = arr[0];
// const b = arr[1];
// const c = arr[2];

const [x, y, z] = arr; //destructuring, original array is not destroyed.
console.log(x, y, z);
console.log(arr);

let [main, secondary] = restaurant.categories;
console.log(main, secondary);

// const [main, , secondary] =restaurant.categories;
// console.log(main, secondary);//Skipping an element

//If owner decided to switch the main and secondary.

//without destructuring
// const temp = main;
// main = secondary;
// secondary = temp;
// console.log(main,secondary);

//With Destructuring
[main, secondary] = [secondary, main];
console.log(main, secondary);

//Recieve 2 return values from a fn.
const [starter, mainCourse] = restaurant.order(2, 0);
console.log(starter, mainCourse);

//Nested Destructuring
const nested = [2, 4, [5, 6]];
// const [i, ,j] = nested;
// console.log(i,j);

const [i, , [j, k]] = nested;
console.log(i, j, k);

//Default values
const [p = 1, q = 1, r = 1] = [8, 9];//f we remove any of the values it will take the default value
console.log(p, q, r);
*/

// Destructuring objects
const restaurant = {
  name: 'Classico Italiano',
  location: 'Via Angelo Tavanti 23, Firenze, Italy',
  categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
  starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
  mainMenu: ['Pizza', 'Pasta', 'Risotto'],

  // ES6 enhanced object literals
  openingHours: {
    thu: {
      open: 12,
      close: 22,
    },
    fri: {
      open: 11,
      close: 23,
    },
    sat: {
      open: 0,
      close: 24,
    },
  },

  order: function (starterIndex, mainIndex) {
    return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
  },
  orderDelivery({ starterIndex = 1, mainIndex = 0, time = '20:00', address }) {
    console.log(
      `Order received! ${this.starterMenu[starterIndex]} and ${this.mainMenu[mainIndex]} will be delivered to ${address} at ${time}`
    );
  },
  orderPasta: function (ing1, ing2, ing3) {
    console.log(`Here is your delicious pasta with ${ing1}, ${ing2},${ing3}`);
  },
};
//passing objects as arguments
restaurant.orderDelivery({
  time: '22:30',
  address: 'via del sole,21',
  mainIndex: 2,
  starterIndex: 2,
});

restaurant.orderDelivery({
  address: 'via del sole,21',
  mainIndex: 2, //rest will be taken from stater values
});

const { name, openingHours, categories } = restaurant;
console.log(name, openingHours, categories);

const {
  name: restaurantName,
  openingHours: hours,
  categories: tags,
} = restaurant;
console.log(restaurantName, hours, tags); //changing variable names.

const { menu = [], starterMenu: starters = [] } = restaurant; //assigning default values.
console.log(menu, starters);

//Mutating variables
let a = 111;
let b = 999;
const obj = { a: 23, b: 7, c: 14 };

({ a, b } = obj);
console.log(a, b);

//Nested objects
const {
  fri: { open: o, close: c },
} = openingHours;

// console.log(open, close);
console.log(o, c);

//Spread Operator
const arr = [7, 8, 9];
const badnewArr = [1, 2, arr[0], arr[1], arr[2]];
console.log(badnewArr);

const newArr = [1, 2, ...arr]; //expands or takes all the elements from the array and writes them here.
console.log(newArr);

console.log(...newArr); //When we need the individual elements.

const newMenu = [...restaurant.mainMenu, 'Gnocci']; //we are here creating a completely new array.
console.log(newMenu);

//Spread operator takes all the elements fro the array and also it doesn't create new variables as a consequence we can will only use it where we use values separated from commas.

//Copy array
const mainMenuCopy = [...restaurant.mainMenu];

//Join 2 arrays
const fullMenu = [...restaurant.starterMenu, ...restaurant.mainMenu];
console.log(fullMenu);

//Spread operator works on all so called iterables.
//Iterables: all array, strings maps & sets except objects.

const str = 'jonas';
const letters = [...str, '', 'S'];
console.log(letters); //We can only use the sperad operator when building an array or passing values into a function.

//Real world example
const ingredients = [
  // prompt("let's make pasta! Ingredient 1?"),
  // prompt("let's make pasta! Ingredient 2?"),
  // prompt("let's make pasta! Ingredient 3?"),
];

console.log(ingredients);

restaurant.orderPasta(ingredients[0], ingredients[1], ingredients[2]);

restaurant.orderPasta(...ingredients);


// Spread operator with Objects, although objects are not iterables, but es2018 supports it.
const newRestaurant = {...restaurant, founder: 'Hashim'}
console.log(newRestaurant);

const restaurantCopy = {...restaurant};
restaurantCopy.name = 'Ristorant Roma';
console.log(restaurantCopy.name);
console.log(restaurant.name);
