/////////////////////////////////////////////////
/////////////////////////////////////////////////
// LECTURES

/////////////////////////////////////////////////
//Methods ar fns attached to objects and if arrays have methods that means arrays are also objects.

let arr = ['a', 'b', 'c', 'd', 'e'];

//SLICE
console.log(arr.slice(2));
console.log(arr.slice(2, 4));
console.log(arr.slice(-1));
console.log(arr.slice()); //Shallow Copy

//SPLICE(mutates the org. array)
// console.log(arr.splice(2));
arr.splice(-1);
console.log(arr);
arr.splice(1, 2); //second parameter is the number of elements to be deleted.
console.log(arr); //original array changed

arr = ['a', 'b', 'c', 'd', 'e'];

//REVERSE(mutates the org. array)
const arr2 = ['j', 'i', 'h', 'g', 'f'];
console.log(arr2.reverse());
console.log(arr2);

//CONCAT
const letters = arr.concat(arr2);
console.log(letters);
console.log([...arr, ...arr2]); //another method

//JOIN
console.log(letters.join('-'));

//At Method
const arr3 = [23, 11, 64];
console.log(arr3[0]);
console.log(arr3.at(0));

//Getting the last element
console.log(arr3[arr3.length - 1]);
console.log(arr3.slice(-1)[0]);
console.log(arr3.at(-1));

//Also works on strings
console.log('Hashim'.at(0));

const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

// for(const movement of movements){
for (const [i, movement] of movements.entries()) {
  if (movement > 0) {
    console.log(`Movement ${i + 1}: You deposited ${movement}`);
  } else {
    console.log(`Movement ${i + 1}: You Withdrew ${Math.abs(movement)}`);
  }
}
console.log('------------------------');
//For-each Loop (Higher order Func)
movements.forEach(function (movement, index, array) {
  //the order of args is imp, first value is element and second is index.
  if (movement > 0) {
    console.log(`At index ${index + 1}: You deposited ${movement}`);
  } else {
    console.log(`At index ${index + 1}: You Withdrew ${Math.abs(movement)}`);
  }
}); //The continue and break statements dont work in forEach, it loops over the entire array.
//0:Function(200)
//1:Function(450)
//2:Function(400)

//ForEach with maps and sets
const currencies = new Map([
  ['USD', 'United States dollar'],
  ['EUR', 'Euro'],
  ['GBP', 'Pound sterling'],
]);

currencies.forEach(function (value, key, map) {
  console.log(`${key}:${value}`);
});

const currenciesUnique = new Set(['USD', 'GBP', 'USD', 'EURO']);
currenciesUnique.forEach(function (value, key, map) {
  console.log(`${key}:${value}`); //sets dont have keys, so its unnecessary here.
});

//Map,filter,reduce
/*
=> Map returns a new array containing the results of applying an operation on all original array elements.
=> Filter returns a new array containing the elements that passed a specified test condition.
=> Reduce boils all array elements down to one single value(e.g., adding all elements together. No new array but one single value.)
*/

const euroToUsd = 1.1;

const movementsUSD = movements.map(function (mov) {
  return mov * euroToUsd;
});

// const movementsUSD = movements.map(mov => mov * euroToUsd);

console.log(movements);
console.log(movementsUSD);

const movementsUSDfor = [];
for (const mov of movements) movementsUSDfor.push(mov * euroToUsd);
console.log(movementsUSDfor);

const movementsDescription = movements.map(function (mov, i) {
  return `Movement ${
    i + 1
  }: You ${mov > 0 ? 'deposited' : 'withdrew'}${Math.abs(mov)}`;
});
console.log(movementsDescription);
//ForEach creates side-effects(at each iteration we perform some action that is visible in the console(to do something without returning) but the map method returns the entire array not individual elements).

//Filter Method
const deposits = movements.filter(function (mov) {
  return mov > 0;
});
console.log(movements);
console.log(deposits);

const withdrawals = movements.filter(mov => mov < 0);
console.log(withdrawals);

//Reduce Method(first parameter is accumulator)
console.log(movements);
const balance = movements.reduce(function (acc, curr, i, arr) {
  console.log(`Iteration ${i}: ${acc}`);
  return acc + curr;
}, 0); //0 is the initial value of the acc in the first loop iteration.

console.log(balance);

//Maximum value
const max = movements.reduce(function (acc, curr, i) {
  console.log(
    `At iteration ${i} Accumulator is ${acc} & Current Element is ${curr}`
  );
  return acc > curr ? acc : curr;
}, movements[0]);
console.log(max);

//Chaining/Pipeline
const usdtoeuro = 1.1;
const total = movements
  .filter(mov => mov > 0)
  // .map(mov => mov * usdtoeuro)
  .map((mov, i, arr) => {
    console.log(arr); //map called on the array returned by the filter method.
    return mov * usdtoeuro;
  })
  .reduce((acc, mov) => acc + mov, 0);
console.log(total);

//Find Method(loops over the array and returns the first match i.e.,only one element or object)
const firstWithdrawal = movements.find(mov => mov < 0);
console.log(movements);
console.log(firstWithdrawal);

console.log(accounts);

const account = accounts.find(acc => acc.owner === 'Jessica Davis');
console.log(account);
const index1 = accounts.findIndex(acc => acc.owner === 'Jonas Schmedtmann');
console.log(index1);

//The new findLast and findLastIndex methods
console.log(movements);
const lastWithdrawal = movements.findLast(mov => mov < 0);
console.log(lastWithdrawal);
const latestLargestMovement = movements.findLastIndex(
  mov => Math.abs(mov) > 1000
);
console.log(latestLargestMovement);
console.log(
  `Your Latest largest movement was ${
    movements.length - latestLargestMovement - 1
  } movements ago`
);

console.log(movements);
//Checks Equality
console.log(movements.includes(-130));

//Some and every method
//Checks condition
console.log(movements.some(mov => mov > 0));

//Every method
//Returns true when all satisfy
console.log(movements.every(mov => mov > 0));

//separate callback
const deposit = mov => mov > 0;
console.log(movements.some(deposit));

//Flat and FlatMap methods
const arrnN = [[1, 2, 3], [4, 5, 6], 7, 8];
console.log(arrnN.flat());
//only goes one level deep

const arrD = [[[1, 2], 3], [4, [5, 6]], 7, 8];
console.log(arrD.flat(2));

const overallBalance = accounts
  .map(acc => acc.movements)
  .flat()
  .reduce((acc, curr) => acc + curr, 0);
console.log(overallBalance);

const overallBalance2 = accounts
  .flatMap(acc => acc.movements)
  .reduce((acc, curr) => acc + curr, 0);
console.log(overallBalance2);
//But flatMap goes just one level deep, so if we need to go deeper we hav to use them separately.

//Sorting
const owners = ['Jonas', 'Zach', 'Adam'];
console.log(owners.sort());

// console.log(movements.sort()); //doesnt work directly on numbers as it takes them as strings

//return < 0, A, B (keeping the order)
//return > 0, B, A  (switching the order)
//Asc
// movements.sort((a, b) => {
//   if (a > b) return 1;
//   if (b > a) return -1;
// });
// console.log(movements);
movements.sort((a, b) => a - b);
console.log(movements);

//Des
// movements.sort((a, b) => {
//   if (a > b) return -1;
//   if (b > a) return 1;
// });
movements.sort((a, b) => b - a);
console.log(movements);

//Array Grouping(group array elements based on some condition)
console.log(movements);
const groupedMovement = Object.groupBy(movements, movements =>
  movements > 0 ? 'deposit' : 'withdrawals'
);
console.log(groupedMovement);

const groupedByActivity = Object.groupBy(accounts, account => {
  const movementsCount = account.movements.length;
  if (movementsCount >= 8) return 'Highly active';
  if (movementsCount >= 4) return 'active';
  if (movementsCount >= 1) return 'less active';
  return 'inactive';
});
console.log(groupedByActivity);

//Main use-case
const groupedByType = Object.groupBy(accounts, account => account.type);
console.log(groupedByType);

//More ways of creating and filling arrays
//Empty array + Fill method
const x = new Array(7); //creates an empty array of length 7
x.fill(1, 3, 5); //fill 1s from 3 to 5 index
console.log(x);

x.fill(1, 3); //3 is where we want it to start
console.log(x);

x.fill(1);
console.log(x);

//Array.form Method
const y = Array.from({ length: 7 }, () => 1);
console.log(y);

const z = Array.from({ length: 7 }, (_, i) => i + 1);
console.log(z);

//Main use-case(creating arrays from other iterables)
labelBalance.addEventListener('click', function () {
  const movementUi = Array.from(
    document.querySelectorAll('.movements__value'),
    el => Number(el.textContent.replace('€', ''))
  );

  console.log(movementUi);
  // const movementUi = Array.from(document.querySelectorAll('.movements__value'));

  // console.log(movementUi.map(el => el.textContent.replace('€', '')));
});
//If we used map on result of queryselectorall directly it wont work as it returns a node list not a real array thats why array.form is useful.

//Non-Destructed Alternatives: ToReversed, ToSorted, ToSpliced
//When we dont want to mutate the original array.
console.log(movements);
// const revMov=movements.reverse()
// console.log(movements);

// const revMov = movements.slice().reverse();//slice() creates a new copy so preventing mutation.
/////Or
const revMov = movements.toReversed();
console.log(revMov);
console.log(movements);

//toSorted, toSpliced(work same but dont mutate the array)

//changing an element in array wihout mutating the org.
// movements[1]=2000//mutated
