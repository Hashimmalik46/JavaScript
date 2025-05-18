'use strict';
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
