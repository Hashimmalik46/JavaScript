/*
Introduction
let js = 'amazing';
if (js == 'amazing') alert('javascript is fun')

let firstName = "Hashim";

console.log(firstName);
*/

/*
Variables
let country = "India";
let continent = "Asia";
let population = "1.4B";

console.log(country);
console.log(continent);
console.log(population);
*/

/* true;
console.log(true);

let javasrcriptIsFun = true;

console.log(javasrcriptIsFun);

console.log(typeof true);
console.log(javasrcriptIsFun);
console.log(typeof 23);
console.log(typeof 'hashim');

// Dynamic Typing...
javasrcriptIsFun = 'yes';
// assigning a new value to already existing variable without using let...
console.log(typeof javasrcriptIsFun);

// Undefined
let year;
console.log(year);
console.log(typeof year);
// type is also undefined

year = 2025;
console.log(year);
console.log(typeof year);

console.log(typeof null);
// type shows null as an object which is not the case so it is considered as a bug...
*/

/*
// Ways of declaring variables

// 1. 'Let' is used to declare those which can change later, reassigning or mutating...
let age = 22;
age = 30;

//  2. 'const' = not changed later, we can't declare empty const variables...
const birthYear = 2003;
//birthYear = 2004;
// const job;

// 3.'var' older way, not recommended...
var job = 'programmer';
job = 'teacher'; */


/* // Operators

const now = 2025;
const ageHash = now - 2003;
const ageSuh = now - 2005;
console.log(ageHash, ageSuh);

console.log(ageHash * 2, ageSuh / 10, 2 ** 3);
// 2**3= 2 to the power of 3...

const firstName = 'Hashim';
const lastName = 'Malik';

//concatenation
console.log(firstName + lastName);
console.log(firstName + ' ' + lastName); //with a space in between...


// 'typeof' operator(already discussed above)

// Assignment operators...
let x = 10 + 5;  //  15  + is executed before bcx of precedence..
x += 10; // 25
x *= 4; //100
x++;
x--;
console.log(x);


//Comparison operators
console.log(ageHash > ageSuh);  // >,<,>=,<=
console.log(ageHash >= 20);
*/

/* */

// Precedence

/*
Challenge
const massMark=78;
const heightMark=1.69;
const massJohn=92;
const heightJohn=1.95;

const bmiMark=massMark/(heightMark*heightMark);
const bmiJohn=massJohn/(heightJohn*heightJohn);
const markHigherBmi = bmiMark>bmiJohn;

console.log(bmiMark,bmiJohn,markHigherBmi);

*/

/*
//Strings and template literals

const firstName = 'Hashim';
const job = 'student';
const birthYear = 2003;
const year = 2025;

const info = "I'm " + firstName + ', a ' + (year - birthYear) + ' years old ' + job + '.';
console.log(info);

console.log('String with\n\
multiple\n\
lines');

//Template Literal
const infonew = `I'm ${firstName}, a ${year - birthYear} years old ${job}.`;
console.log(infonew);

console.log(`String with
multiple
lines`);
*/

/*
// if/else statements

const age = 19;
yearsLeft = 18 - age;

if (age >= 18) {
  console.log('Suhail is eligible for a driving license 🚗...');
} else {
  console.log(`Suhail is too young, wait for another ${yearsLeft} years😊`);
}*/

/*//Type Conversion(explicit)
const year = '1991';
console.log(typeof year); //string
console.log(year + 18); //199118
console.log(Number(year) + 18); //2009

//Type coercion(implicit)
console.log('I am ' + 23 + ' years old.')// number gets automatically converted into a string for concatenation.
console.log('23' - '10' - 3)//string gets converted into a number, same for * and /

let n = '1' + 1;//11
n = n - 1;
console.log(n);//10
 */

/* // Truthsy and Falsy Values
//Falsy values are not exactly false but become false once we try to convert them into a boolean.
//5 falsy values: 0, '', undefined, null, Nan(not a number)

//It is a type coercion, done when using logical operators or in a logical context.
console.log(Boolean(0));
console.log(Boolean(undefined));
console.log(Boolean('Hashim'));
console.log(Boolean({}));
console.log(Boolean(''));


const money = 0;
if (money) {
  console.log("Don't spend it all");
} else {
  console.log("You should get a job!")
}//else block will be executed as '0' is a falsy value, it will be type coerced to false...

let height;
if (height) {
  console.log('height is defined');
} else {
  console.log('height is undefined');
}//else block will be executed again as height has not been yet defined & undefined is a falsy value...but if we use let height= 0; although it is defined but it will still execute else block(bug, can be fixed by using logical operators).*/

/*//Equality operators

const age = 18;
if (age === 18)
  console.log('you are an adult');

//=== ->'strict equality(no type coercion) , == ->'loose equality(does type coercion).
//!== ->'strict inequality', != ->'loose inequality'.

console.log(18 === 18)//true
console.log(18 === '18')//false
console.log('18' == 18)//true

// taking input

const lucky = Number(prompt("Enter your lucky number"));

console.log(lucky);
if (lucky === 3) {
  console.log('cool!')
};
//this won't show anything as we have used a strict equality and lucky is a string...so we have to type convert it as done in line 214, if we use a loose equality then it will automatically do type coercion... */

/* // Boolean Logic

const hasDriversLicense = true;
const hasGoodVision = true;
const isTired = true;

console.log(hasDriversLicense && hasGoodVision && isTired);
console.log(hasDriversLicense || hasGoodVision || isTired);
console.log(!hasDriversLicense);

if (hasDriversLicense && hasGoodVision && !isTired) {
  console.log("Hashim can drive");
} else {
  console.log("someone else should drive...");
}*/

/* //Switch statement

const day = prompt("Enter a day");

switch (day) {
  case 'monday': //day==='monday'
    console.log('all classes and a lab');
    break;
  case 'tuesday':
    console.log('3 classes and a lab');
    break;
  case 'wednesday':
  case 'thursday':
    console.log("3 classes");
    break;
  case 'friday':
    console.log("4 classes");
    break;
  case 'saturaday':
  case 'sunday':
    console.log('weekend');
    break;
  default:
    console.log('invalid input');
    break;
}
*/

//statements are complete sentences that translate our actions while as expressions are something that yield some value.
//we can't put expressions inside a template literal.

/*
//Conditional or ternary operator
const age = 22;

const drive = age >= 18 ? 'Yes' : 'No!';
console.log(drive);

console.log(`you ${age >= 18 ? 'can drive' : 'cannot drive'}`)

const bill = 275;

const tip = bill >= 50 && bill <= 300 ? 0.15 * bill : 0.2 * bill;

console.log(`The bill was ${bill}, the tip was ${tip}, and the total value ${bill + tip}`);

*/

//Javascript engine has backwards compatibility means an older version code can be run on a newer version but it doesn't has forwards compatibility means modern js can't run on an older version...
//To ensure that our code should run on older version browsers we use transpiling and polyfilling means converting back to ES5.

console.log('hello')

















