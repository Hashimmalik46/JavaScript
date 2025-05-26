'use strict';

const weekDays = ['Mon', 'tue', 'thu', 'fri', 'sat', 'sun'];

//(3. Enhanced Object Literal)We can Compute property names without writing them literally.
const openingHours = {
  [weekDays[3]]: {
    open: 12,
    close: 22,
  },
  [weekDays[4]]:{
    open: 11,
    close: 23,
  },
 [weekDays[5]]:{
    open: 0,
    close: 24,
  },
};

// const openingHours = {
//   thu: {
//     open: 12,
//     close: 22,
//   },
//   fri: {
//     open: 11,
//     close: 23,
//   },
//   sat: {
//     open: 0,
//     close: 24,
//   },
// };

const restaurant = {
  name: 'Classico Italiano',
  location: 'Via Angelo Tavanti 23, Firenze, Italy',
  categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
  starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
  mainMenu: ['Pizza', 'Pasta', 'Risotto'],

  // ES6 enhanced object literals(1. Enhanced Object Literal)
  // openingHours: openingHours,//before ES5
  //New
  openingHours,

  // openingHours: {
  //   thu: {
  //     open: 12,
  //     close: 22,
  //   },
  //   fri: {
  //     open: 11,
  //     close: 23,
  //   },
  //   sat: {
  //     open: 0,
  //     close: 24,
  //   },
  // },

  // order: function (starterIndex, mainIndex) {
  //   return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
  // },
  //(2. Enhanced Object Literal)
  order(starterIndex, mainIndex) {
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
  orderingPizza: function (mainIngrediant, ...otherIngrediants) {
    console.log(mainIngrediant);
    console.log(otherIngrediants);
  },
};

/*

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

/*
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
const newRestaurant = { ...restaurant, founder: 'Hashim' };
console.log(newRestaurant);

const restaurantCopy = { ...restaurant };
restaurantCopy.name = 'Ristorant Roma';
console.log(restaurantCopy.name);
console.log(restaurant.name);

//Rest Pattern(opp. of spread), packs the elements.

//here we are using spread as it is on the right of the assignment operator.
const array = [1, 2, ...[3, 4]];

//rest because on the left side.
const [p, q, ...others] = [1, 2, 3, 4, 5];
console.log(p, q, others);

const [pizza, , risotto, ...otherfood] = [
  ...restaurant.mainMenu,
  ...restaurant.starterMenu,
];
console.log(pizza, risotto, otherfood); //rest pattern doesnot includes any skipped elements it just includes all the remaining so it should be used at last in the destructuring assignment.

//Objects
const { sat, ...weekdays } = restaurant.openingHours;
console.log(weekdays);

//Functions(rest parameters)
const add = function (...numbers) {
  let sum =0;
  for(let i=0;i<numbers.length;i++){
    sum+=numbers[i];
  }
  console.log(sum);
};
add(2, 3);
add(5, 3, 7, 2);
add(8, 2, 5, 3, 2, 1, 4);

const x =[23,5,7];
add(...x);//using spread op

restaurant.orderingPizza('mushrooms','onion','olives','spinach');
*/

/*
// Short-circuiting(&& and ||)
//can use any data type, return any data type, and perform short-circuiting
console.log('----OR----');
//Short-circuiting OR returns the first true value and returns the last value if all are falsy.
console.log(3 || 'Jonas');
console.log('' || 'jonas');
console.log(true || 0);
console.log(undefined || null);

// restaurant.numguests = 23;
const guests1 = restaurant.numguests ? restaurant.numguests : 10;
console.log(guests1); //we are here trying to set a default values means if restaurant.numguests is undefined it will be set to 10,
//we can do it by short-circuiting.

const guests2 = restaurant.numguests || 10;
console.log(guests2);

console.log('----AND----');
//It returns the first fasle value and returns the last one if all are true.
console.log(0 && 'jonas');
console.log(7 && 'jonas');

//Nullish Coalescing operator
restaurant.numguests = 0;
const guests3 = restaurant.numguests || 10;
console.log(guests3);//Won't work if numguests= 0 as 0 in itself is a falsy value, so ans. would be 10.

//Nullish: null and undefined(not 0 or '')
const guestCorrect = restaurant.numguests ??10;
console.log(guestCorrect);
*/

//Logical assignment operators
const rest1 = {
  name: 'Capri',
  numGuests: 20,
};
const rest2 = {
  name: 'La Piazza',
  owner: 'Hashim',
};
//Let's say we want to assign a default value.

// rest1.numGuests = rest1.numGuests || 10;
// rest2.numGuests = rest2.numGuests || 10;

//OR Assignment Operator
rest1.numGuests ||= 10;
rest2.numGuests ||= 10;

// rest1.numGuests??=10; if numGuests = 0
// rest2.numGuests??=10;

//Logical AND Operator
//Let's say we want to anonymise someone.
//rest1.owner = rest1.owner && '<ANONYMOUS>'; this will return undefined as rest1.owner is undefined and undefined is already a falsy value.
// rest2.owner = rest2.owner && '<ANONYMOUS>';
rest1.owner &&= '<ANONYMOUS>'; //it won't return undefined, the object will stay the same.
rest2.owner &&= '<ANONYMOUS>';

console.log(rest1);
console.log(rest2);

///////////////////////////////////////
// Coding Challenge #1

/* 
We're building a football betting app (soccer for my American friends 😅)!

Suppose we get data from a web service about a certain game (below). In this challenge we're gonna work with the data. So here are your tasks:

1. Create one player array for each team (variables 'players1' and 'players2')
2. The first player in any player array is the goalkeeper and the others are field players. For Bayern Munich (team 1) create one variable ('gk') with the goalkeeper's name, and one array ('fieldPlayers') with all the remaining 10 field players
3. Create an array 'allPlayers' containing all players of both teams (22 players)
4. During the game, Bayern Munich (team 1) used 3 substitute players. So create a new array ('players1Final') containing all the original team1 players plus 'Thiago', 'Coutinho' and 'Perisic'
5. Based on the game.odds object, create one variable for each odd (called 'team1', 'draw' and 'team2')
6. Write a function ('printGoals') that receives an arbitrary number of player names (NOT an array) and prints each of them to the console, along with the number of goals that were scored in total (number of player names passed in)
7. The team with the lower odd is more likely to win. Print to the console which team is more likely to win, WITHOUT using an if/else statement or the ternary operator.

TEST DATA FOR 6: Use players 'Davies', 'Muller', 'Lewandowski' and 'Kimmich'. Then, call the function again with players from game.scored

GOOD LUCK 😀
*/

/*
const game = {
  team1: 'Bayern Munich',
  team2: 'Borrussia Dortmund',
  players: [
    [
      'Neuer',
      'Pavard',
      'Martinez',
      'Alaba',
      'Davies',
      'Kimmich',
      'Goretzka',
      'Coman',
      'Muller',
      'Gnarby',
      'Lewandowski',
    ],
    [
      'Burki',
      'Schulz',
      'Hummels',
      'Akanji',
      'Hakimi',
      'Weigl',
      'Witsel',
      'Hazard',
      'Brandt',
      'Sancho',
      'Gotze',
    ],
  ],
  score: '4:0',
  scored: ['Lewandowski', 'Gnarby', 'Lewandowski', 'Hummels'],
  date: 'Nov 9th, 2037',
  odds: {
    team1: 1.33,
    x: 3.25,
    team2: 6.5,
  },
};

// 1.
const [players1, players2] = game.players;
console.log(players1, players2);

//2.
const [gk, ...fieldPlayers] = players1;
console.log(gk, fieldPlayers);

//3.
const allPlayers = [...players1, ...players2];
console.log(allPlayers);

//4.
const players1Final = [...players1, 'Thiago', 'Coutinho', 'Perisic'];
console.log(players1Final);

//6.
const {
  odds: { team1, x: draw, team2 },
} = game;
console.log(team1, draw, team2);

// 6.
const printGoals = function (...players) {
  console.log(`${players.length} goals were scored`);
};
printGoals('Davies', 'Muller', 'Lewandowski', 'Kimmich');
printGoals('Davies', 'Muller');
printGoals(...game.scored);

console.log(`Scoring players: ${game.scored}`);

team1<team2 && console.log('Team 1 is more likely to win');
team1>team2 && console.log('Team 2 is more likely to win');

*/

//looping over arrays
const menu = [...restaurant.starterMenu, ...restaurant.mainMenu];

for (const item of menu) console.log(item); //For-of loop, automatically loops over the array, in each iteretion it will give us access to each element which we specified as 'item' above, we can also use the break and continue keywords.

for (const item of menu.entries()) {
  //gives the index
  console.log(item);
}

console.log([...menu.entries()]); //also an array

for (const [i, el] of menu.entries()) {
  console.log(`${i + 1}: ${el}`);
}
