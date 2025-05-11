'use strict';//enables strict mode, prevents accidental errors by forbidding us to do certain things and by creating visible errors. It also reserves some words means doesn't allow us to use them because they might get introduced as keywords in future.

/*function logger(){
  console.log('My name is Hashim');
}

logger();//calling, running or invoking 


// function juicemaker(apples,oranges){
//   const juice=`Juice with ${apples} apples and ${oranges} oranges.`;
//   return juice;
// }

// const applejuice= juicemaker(5,0);
// console.log(applejuice);


//function declaration,this type can be called before its defintion.
function calcAge1(currentYear,birthYear){
  return currentYear-birthYear;
}

const age1=calcAge1(2025,2003);
console.log(age1);

//function expression or anonymous function
const calcAge2=function(currentYear,birthYear){
  return currentYear-birthYear;
}
const age2=calcAge2(2025,2003);
console.log(age2);


//Arrow function
const calcAge3=(currentYear,birthYear) =>currentYear-birthYear;
const age3=calcAge3(2025,2003);
console.log(age3);

const yearsLeft=birthYear=>{
  const age=2025-birthYear;
  const yearsret=63-age;
  return yearsret;
}
console.log(yearsLeft(2003));


// function calling other function.
function cutPieces(fruits){
  return fruits*4;
}
function juicemaker(apples,oranges){
 const applepieces= cutPieces(apples);
  const orangepieces =cutPieces(oranges);
  const juice=`Juice with ${applepieces} apples pieces and ${orangepieces} orange pieces.`;
  return juice;
}

const applejuice= juicemaker(5,3);
console.log(applejuice);
 */
//functions

/* //Arrays

const friends = ['Faisal', 'Suhail', 'Junaid'];
console.log(friends);

console.log(friends.length);

console.log(friends[0]);

friends[2] = 'Hashim';
console.log(friends);//here i was able to mutate a 'const' variable which sounds contradictory but only primitive data types are immutable and array is a non-primitive one. 

const lastName = 'zahoor';
const hashim = ['hashim', lastName, 2025 - 2003, friends];
console.log(hashim);

//Exercise
const calcAge = function (cYear, birthYear) {
  return cYear - birthYear;
}
// const age=calcAge(2025,2003);
// console.log(age);

const years = [1990, 1982, 1973, 2005, 2003];

const age1=calcAge(2025,years[0]);
const age2=calcAge(2025,years[1]);
const age3=calcAge(2025,years[2]);
console.log(age1,age2,age3);

const ages=[calcAge(2025,years[0]),calcAge(2025,years[1]),calcAge(2025,years[2])];
console.log(ages);
//Methods or array operations.
const friends = ['Faisal', 'Suhail', 'Junaid'];
//add elements
friends.push('Haadi');//at last
// const newLength=friends.push('Haadi'); returns length.
// console.log(newLength);
friends.unshift('Burhaan');//at first
//removing elements
friends.pop();
const popped = friends.pop();//doesn't returns length but the popped element itself../
console.log(popped);

friends.shift();//at first
console.log(friends);

console.log(friends.indexOf('Faisal'));//index

console.log(friends.includes('Junaid'));//returns true or false based on the presence,uses strict equality for this check. We can use this to write conditionals.

if (friends.includes('Faisal')) {
  console.log("Great");
}*/



/*In arrays we can only access elements by their order 
 so to solve this issue we use other data type called as Objects
 //Objects

const hashim = {
  firstName: 'Hashim', lastName: 'Zahoor', age: 2025 - 2003, job: 'student', friends: ['Faisal', 'Suhail', 'Junaid']
};
console.log(hashim);
//Retrieving data
console.log(hashim.lastName);
console.log(hashim['lastName']);
//if two keys or properties have some repeating parts
// const nameKey = 'Name';

// console.log(hashim['first' + nameKey]);
// console.log(hashim['last' + nameKey]);

// const interestedIn = prompt('What do you want to know about Hashim? Choose between firstName, lastName, age, job, and friends');

// // console.log(hashim.interestedIn);//will not work

// console.log(hashim[interestedIn]);//this worked beacause the expression that we put in the square brackets will get evaluated...

//Adding new properties
hashim.location='Kashmir';
hashim['insta']='@i_hash46';
console.log(hashim);

//"hashim has 3 friends and his best friend is Faisal,suppose the best friend is the first one"
const numFriends=hashim.friends.length;
console.log(`Hashim has ${numFriends} friends, and his best friend is ${hashim.friends[0]}.`);*/

/* //Iteration
// (For loop)

// for(let rep=1;rep<=10;rep++){
//   console.log(`Lifting weights repetition ${rep}🏋️`);
// };

// const hashim = [
//   'Hashim', 'Zahoor', 2025 - 2003, 'student', ['Faisal', 'Suhail', 'Junaid']
// ];

// const types=[];

// for (let i = 0; i < hashim.length; i++) {
//   //Reading from hashim
//   console.log(hashim[i]);
//   //filling another array with the types
//   types[i]=typeof hashim[i];
//   //or types.push(typeof hashim[i]);
// }
// console.log(types);

// for(let i=0;i<hashim.friends.length;i++){
//   console.log(hashim.friends[i]);
// }

// const years = [1991, 2007, 1969, 2003];

// const ages = [];
// for (let i = 0; i < years.length; i++) {
//   ages.push(2025 - years[i]);
// }
// console.log(ages);

//continue and break
//continue is used to skip a particular iteration, break is used to break the entire loop.
// const hashim = [
//     'Hashim', 'Zahoor', 2025 - 2003, 'student', ['Faisal', 'Suhail', 'Junaid']
//   ];

// for(let i=0;i<hashim.length;i++){
//   if(typeof hashim[i]!== 'string') continue;
//   console.log(hashim[i],typeof hashim[i]);
// }

// for(let i=0;i<hashim.length;i++){
//   if(typeof hashim[i]=== 'number') break;
//   console.log(hashim[i],typeof hashim[i]);
// }

//Looping backwards and nested loops
const hashim = [
  'Hashim', 'Zahoor', 2025 - 2003, 'student', ['Faisal', 'Suhail', 'Junaid']
];
for (let i = hashim.length; i >= 0; i--) {
  console.log(hashim[i]);
}

for(let exercise=1;exercise<4;exercise++){
  console.log(`------Starting Exercise ${exercise} 💪`);
  for(let rep=1;rep<6;rep++){
    console.log(`Exercise ${exercise}: Lifting weight Repetition ${rep}🏋️`);
  }
}//While Loop

// for(let rep=1;rep<=10;rep++){
//   console.log(`Lifting weights repetition ${rep}🏋️`);
// };

let rep=1;
while(rep<=10){
  // console.log(`Lifting weights repetition ${rep}🏋️`);
  rep++;
}
let dice =Math.trunc(Math.random()*6) +1;
console.log(dice);

//while is used when we essentially don't need a counter.
while(dice!==6){
  console.log(`You rolled a ${dice}`);
  dice =Math.trunc(Math.random()*6) +1;
}*/

