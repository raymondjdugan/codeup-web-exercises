(function(){
////////////////////////////////////////////////////////////////
///////////////////////// Values and Variables /////////////////
// Variables can be used to store values
// Use console.log to see the output in the console
console.log("Jonas");
console.log(23);

// Use const, let and var to declare variables
let firstName = "Matilda";
console.log(firstName);

// Variable name conventions
// Do not use reserved words
// Best practice is to camelCase
//let jonas_matilda = "JM"; // Not this
//let $function = 27; // Not this

let person = "jonas";
let PI = 3.1415;

let myFirstJob = "Coder";
let myCurrentJob = "Teacher";

let job1 = "programmer";
let job2 = "teacher";

///////////////////////////////////////////////////////////////////
//////////////////////// Data Types ///////////////////////////////

// There are five primitive data types
// String, number, boolean, null and undefined
let javascriptIsFun = 'YES!';
console.log(typeof javascriptIsFun); // Type of this is string

javascriptIsFun = true;
console.log(typeof javascriptIsFun); // Type of this is boolean

console.log(typeof 23); // Type of this log is number
console.log(typeof 'Jonas'); // Type of this log is string

let year; //This is undefined
console.log(year);//This is undefined
console.log(typeof year);//This is undefined

year = 1991; //Type is number
console.log(typeof year); //Type is number

console.log(typeof null);

//////////////////////////////////////////////////////////////////
/////////////////////// let, const and var //////////////////////
// var does not have a scope
// let has a scope inside of a code block.
// I.E. if let is declared inside a function only that function would be able to access the variable
// const is a variable that cannot be mutated (changed)
let age = 30;
age = 31;

const birthYear = 1991;
// birthYear = 1990; // Cannot do this because birthYear is const
// const job; // Cannot initialize a const like this

var job = 'programmer';
job = 'teacher' // Reassigns the job as teacher

// lastName = 'Schmedtmann'; This will not work as it has not initializer (var, let or const)

///////////////////////////////////////////////////////////////////
///////////////////////// Basic Operators ////////////////////////
// Math operators
const now = 2037;
const ageJonas = now - 1991;
const ageSarah = now - 2018;
console.log(ageJonas, ageSarah);

console.log(ageJonas * 2, ageJonas / 10, 2 ** 3);
// 2 ** 3 means 2 to the power of 3 = 2 * 2 * 2

// This does not add like numbers but concatinates the strings
const firstName = 'Jonas';
const lastName = 'Schmedtmann';
console.log(firstName + ' ' + lastName);

// Assignment operators
let x = 10 + 5; // 15
x += 10; // x = x + 10 = 25
x *= 4; // x = x * 4 = 100
x++; // x = x + 1
x--;
x--;
console.log(x);

// Comparison operators
console.log(ageJonas > ageSarah); // >, <, >=, <=
console.log(ageSarah >= 18);

const isFullAge = ageSarah >= 18;

console.log(now - 1991 > now - 2018);

/////////////////////////////////////////////////////////////
////////////////// Operator Precedence //////////////////////
// Order of operations PEMDAS
// (Parentheses, Exponent, Multiply, Divide, Add, Subtract)

const now = 2037;
const ageJonas = now - 1991;
const ageSarah = now - 2018;

console.log(now - 1991 > now - 2018);

let x, y;
x = y = 25 - 10 - 5; // x = y = 10, x = 10
console.log(x, y);

const averageAge = (ageJonas + ageSarah) / 2;
console.log(ageJonas, ageSarah, averageAge);

////////////////////////////////////////////////////////////////////////
//////////////////// Strings and Template Literals ////////////////////
const firstName = 'Jonas';
const job = 'teacher';
const birthYear = 1991;
const year = 2037;

// Can use the + sign to concat
const jonas = "I'm " + firstName + ', a ' + (year - birthYear) + ' year old ' + job + '!';
console.log(jonas);

// Can use template literal `` with ${variable}
const jonasNew = `I'm ${firstName}, a ${year - birthYear} year old ${job}!`;
console.log(jonasNew);

console.log(`Just a regular string...`);

console.log('String with \n\
multiple \n\
lines');

console.log(`String
multiple
lines`);

///////////////////////////////////////////////////////////////////////////
////////////////// Taking Decisions: if / else Statements ////////////////
// if (condition) {
//   DO SOMETHING HERE
// } else if (condition) {
//   DO SOMETHING ELSE HERE
// } else {
//   IF THOSE DONT WORK DO THIS
// }

const age = 15;

if (age >= 18) {
    console.log('Sarah can start driving license 🚗');
} else {
    const yearsLeft = 18 - age;
    console.log(`Sarah is too young. Wait another ${yearsLeft} years :)`);
}

const birthYear = 2012;

let century;
if (birthYear <= 2000) {
    century = 20;
} else {
    century = 21;
}
console.log(century);

////////////////////////////////////////////////////////////////////////
///////////////// Type Conversion and Coercion ////////////////////////

// Type Conversion
const inputYear = '1991';
console.log(Number(inputYear), inputYear);
console.log(Number(inputYear) + 18);

console.log(Number('Jonas'));
console.log(typeof NaN);

console.log(String(23), 23);

// Type Coercion
console.log('I am ' + 23 + ' years old');
console.log('23' - '10' - 3);
console.log('23' / '2');
console.log('23' > '18');

let n = '1' + 1; // '11'
n = n - 1;
console.log(n);

////////////////////////////////////////////////////////////////////
////////////////// Truthy and Falsy Values ////////////////////////

// 5 falsy values: 0, '', undefined, null, NaN

console.log(Boolean(0));
console.log(Boolean(undefined));
console.log(Boolean('Jonas'));
console.log(Boolean({}));
console.log(Boolean(''));

const money = 100;
if (money) {
    console.log("Don't spend it all ;)");
} else {
    console.log('You should get a job!');
}

let height = 0;
if (height) {
    console.log('YAY! Height is defined');
} else {
    console.log('Height is UNDEFINED');
}

////////////////////////////////////////////////////////////////////////////
////////////////// Equality Operators: == vs. === /////////////////////////
// double equals is a loose comparitor - it will only compare the value not the type
// triple equals is a strict comparitor - this will compare both value and type of the value

const age = '18';
if (age === 18) console.log('You just became an adult :D (strict)');

if (age == 18) console.log('You just became an adult :D (loose)');

const favourite = Number(prompt("What's your favourite number?"));
console.log(favourite);
console.log(typeof favourite);

if (favourite === 23) { // 22 === 23 -> FALSE
    console.log('Cool! 23 is an amzaing number!')
} else if (favourite === 7) {
    console.log('7 is also a cool number')
} else if (favourite === 9) {
    console.log('9 is also a cool number')
} else {
    console.log('Number is not 23 or 7 or 9')
}

if (favourite !== 23) console.log('Why not 23?');

///////////////////////////////////////////////////////////////////////
///////////////////// Logical Operators //////////////////////////////

const hasDriversLicense = true; // A
const hasGoodVision = true; // B

console.log(hasDriversLicense && hasGoodVision);
console.log(hasDriversLicense || hasGoodVision);
console.log(!hasDriversLicense);

if (hasDriversLicense && hasGoodVision) {
    console.log('Sarah is able to drive!');
} else {
    console.log('Someone else should drive...');
}

const isTired = false; // C
console.log(hasDriversLicense && hasGoodVision && isTired);

if (hasDriversLicense && hasGoodVision && !isTired) {
    console.log('Sarah is able to drive!');
} else {
    console.log('Someone else should drive...');
}

/////////////////////////////////////////////////////////////////////////
/////////////////////// The switch Statement ///////////////////////////
const day = 'friday';

switch (day) {
// if   (this)
    case 'monday': // day === 'monday'
        console.log('Plan course structure');
        console.log('Go to coding meetup');
        break;
    case 'tuesday':
        console.log('Prepare theory videos');
        break;
    case 'wednesday':
    case 'thursday':
        console.log('Write code examples');
        break;
    case 'friday':
        console.log('Record videos');
        break;
    case 'saturday':
    case 'sunday':
        console.log('Enjoy the weekend :D');
        break;
    default:
        console.log('Not a valid day!');
}

if (day === 'monday') {
    console.log('Plan course structure');
    console.log('Go to coding meetup');
} else if (day === 'tuesday') {
    console.log('Prepare theory videos');
} else if (day === 'wednesday' || day === 'thursday') {
    console.log('Write code examples');
} else if (day === 'friday') {
    console.log('Record videos');
} else if (day === 'saturday' || day === 'sunday') {
    console.log('Enjoy the weekend :D');
} else {
    console.log('Not a valid day!');
}

///////////////////////////////////////////////////////////////////////////
//////////////////////// Statements and Expressions //////////////////////
// Statements can contain other constructions like expressions, keywords, operators and other stuff. Expressions are parts of statements that return values
3 + 4
1991
true && false && !false

if (23 > 10) {
    const str = '23 is bigger';
}

const me = 'Jonas';
console.log(`I'm ${2037 - 1991} years old ${me}`);

/////////////////////////////////////////////////////////////////////////
///////////////// The Conditional (Ternary) Operator ///////////////////
const age = 23;
// (condition) ? if true do this : if false do this
age >= 18 ? console.log('I like to drink wine 🍷') : console.log('I like to drink water 💧');

const drink = age >= 18 ? 'wine 🍷' : 'water 💧';
console.log(drink);

let drink2;
if (age >= 18) {
    drink2 = 'wine 🍷';
} else {
    drink2 = 'water 💧';
}
console.log(drink2);

console.log(`I like to drink ${age >= 18 ? 'wine 🍷' : 'water 💧'}`);

///////////////////////////////////////////////////////////////////////////
///////////////////////////// Functions ///////////////////////////////////

// This is an ananymous function as it does not pass in an parameter
function logger() {
    console.log('My name is Jonas');
}

// Calling / running / invoking function
// This makes them activate
logger();

// This function passes in two parameters
function fruitProcessor(apples, oranges) {
    const juice = `Juice with ${apples} apples and ${oranges} oranges.`;
    return juice;
}

// This passes in 5 as the apple argument and 0 as the orange argument
const appleJuice = fruitProcessor(5, 0);
console.log(appleJuice);

// This passes in 2 as the apple argument and 4 as the orange argument
const appleOrangeJuice = fruitProcessor(2, 4);
console.log(appleOrangeJuice);

// This is a set JS function that takes the string 23 and converts it to a number
// These are called methods and this is just one of many
const num = Number('23');


///////////////////////////////////////////////////////////////////////////
///////////////// Function Declarations vs. Expressions ///////////////////

// Function declaration
function calcAge1(birthYeah) {
    return 2037 - birthYeah;
}
const age1 = calcAge1(1991);

// Function expression
const calcAge2 = function (birthYeah) {
    return 2037 - birthYeah;
}
const age2 = calcAge2(1991);

console.log(age1, age2);


//////////////////////////////////////////////////////////////////////////
//////////////////////// Arrow functions /////////////////////////////////

const calcAge3 = birthYeah => 2037 - birthYeah;
const age3 = calcAge3(1991);
console.log(age3);

const yearsUntilRetirement = (birthYeah, firstName) => {
    const age = 2037 - birthYeah;
    const retirement = 65 - age;
    return retirement;
    return `${firstName} retires in ${retirement} years`;
}

console.log(yearsUntilRetirement(1991, 'Jonas'));
console.log(yearsUntilRetirement(1980, 'Bob'));


/////////////////////////////////////////////////////////////////////////////
///////////////////// Functions Calling Other Functions//////////////////////
function cutFruitPieces(fruit) {
    return fruit * 4;
}

function fruitProcessor(apples, oranges) {
    const applePieces = cutFruitPieces(apples);
    const orangePieces = cutFruitPieces(oranges);

    const juice = `Juice with ${applePieces} piece of apple and ${orangePieces} pieces of orange.`;
    return juice;
}
console.log(fruitProcessor(2, 3));


////////////////////////////////////////////////////////////////////////////
///////////////////////// Reviewing Functions //////////////////////////////

const calcAge = function (birthYeah) {
    return 2037 - birthYeah;
}

const yearsUntilRetirement = function (birthYeah, firstName) {
    const age = calcAge(birthYeah);
    const retirement = 65 - age;

    if (retirement > 0) {
        console.log(`${firstName} retires in ${retirement} years`);
        return retirement;
    } else {
        console.log(`${firstName} has already retired 🎉`);
        return -1;
    }
}

console.log(yearsUntilRetirement(1991, 'Jonas'));
console.log(yearsUntilRetirement(1950, 'Mike'));

///////////////////////////////////////////////////////////////////////////////
/////////////////////////////////Arrays////////////////////////////////////////
const friend1 = 'Michael';
const friend2 = 'Steven';
const friend3 = 'Peter';
// Creating an array with the names
// The different indexes are seperated with a comma
const friends = ['Michael', 'Steven', 'Peter'];
console.log(friends);
// Another way to create an array
const y = new Array(1991, 1984, 2008, 2020);
// This only creates an array with a length of 7 and the values of all 7 indexes are undefined.
const y = new Array(7);
// How to access an index of an array
console.log(friends[0]);
console.log(friends[2]);
// Can also use the .at(index) to access the value of an array
console.log(friends.at(0));
// .length will return the length of an array
console.log(friends.length);
console.log(friends[friends.length - 1]);
// Can assign a certian index a value
friends[2] = 'Jay';
console.log(friends);

const firstName = 'Jonas';

// You can insert variables, primitives and even do math inside an array
const jonas = [firstName, 'Schmedtmann', 2037 - 1991, 'teacher', friends];
console.log(jonas);
console.log(jonas.length);

//Exercise
const calcAge = function (birthYear) {
    return 2037 - birthYear;
}
const years = [1990, 1967, 2002, 2010, 2018];

const age1 = calcAge(years[0]);
const age2 = calcAge(years[1]);
const age3 = calcAge(years[years.length - 1]);
console.log(age1, age2, age3);

// You can also have function returns as values in an array
const ages = [calcAge(years[0]), calcAge(years[1]), calcAge(years[years.length - 1])];
console.log(ages);

//////////////////////////////////////////////////////////////////////////////
///////////////////////Basic Array Operations (Methods)///////////////////////

const friends = ['Michael', 'Steven', 'Peter'];

// Add elements
// Push Method - The push() method adds one or more elements to the end of an array and returns the new length of the array
// push(element0)
// push(element0, element1)
// push(element0, element1, /* ... ,*/ elementN)

const newLength = friends.push('Jay');
console.log(friends);
console.log(newLength);

// Unshift Method - The unshift() method adds one or more elements to the beginning of an array and returns the new length of the array.
// unshift(element0)
// unshift(element0, element1)
// unshift(element0, element1, /* ... ,*/ elementN)

friends.unshift('John');
console.log(friends);

// Remove elements
// Pop Method - The pop() method removes the last element from an array and returns that element.
// pop()
friends.pop(); // Last
const popped = friends.pop();
console.log(popped);
console.log(friends);

// Shift Method - The shift() method removes the first element from an array and returns that removed element
//shift()
friends.shift();
console.log(friends);

// Searching within an array
// IndexOf Method - The indexOf() method returns the first index at which a given element can be found in the array, or -1 if it is not present.
// indexOf(searchElement)
// indexOf(searchElement, fromIndex)
console.log(friends.indexOf('Steven'));
console.log(friends.indexOf('Bob'));

// Includes Method - The includes() method determines whether an array includes a certain value among its entries, returning true or false as appropriate.
// includes(searchElement)
// includes(searchElement, fromIndex)
friends.push(23);
console.log(friends.includes('Steven'));
console.log(friends.includes('Bob'));
console.log(friends.includes(23));

if (friends.includes('Steven')) {
    console.log('You have a friend called Steven');
}


//////////////////////////////////////////////////////////////////////////////
/////////////////// Advanced Array Operations (Methods) ////////////////////

let arr = ['a', 'b', 'c', 'd', 'e'];

// Slice- Method The slice() method returns a shallow copy of a portion of an array into a new array object selected from start to end
// slice()
// slice(start)
// slice(start, end)

console.log(arr.slice(2));
console.log(arr.slice(2, 4));
console.log(arr.slice(-2));

// Splice Method- The splice() method changes the contents of an array by removing or replacing existing elements and/or adding new elements in place
// splice(start)
// splice(start, deleteCount)
// splice(start, deleteCount, item1)
// splice(start, deleteCount, item1, item2, itemN)

console.log(arr.splice(2));
console.log(arr.reverse());

// At Method - The at() method takes an integer value and returns the item at that index, allowing for positive and negative integers
// at(index)
console.log(arr.at(0));
console.log(arr.at(-1));

const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

for (const movement of movements) {
    if (movement > 0) {
        console.log(`You deposited ${movement}`);
    } else {
        console.log(`You withdrew ${Math.abs(movement)}`);
    }
}

// Map Method- creates a new array populated with the results of calling a provided function on every element in the calling array.
// This will create a brand new array based on the original array
// For each iteration it will apply a callback function
const currencies = new Map([
    ['USD', 'United States dollar'],
    ['EUR', 'Euro'],
    ['GBP', 'Pound sterling'],
]);
console.log(currencies);

// ForEach Method - he forEach() method executes a provided function once for each array element.
// forEach reg function = array.forEach(function() {})
// forEach arrow function = array.forEach(param => condition)
// The value, index and array must be accessed in this order
movements.forEach(function (movement, index, array) {
    if (movement > 0) {
        console.log(`You deposited ${movement}`);
    } else {
        console.log(`You withdrew ${Math.abs(movement)}`);
    }
});

currencies.forEach(function (value, key, map) {
    console.log(`${key}: ${value}`);
});

// Filter - creates a new array with all elements that pass the test implemented by the provided function.
const words = ['spray', 'limit', 'elite', 'exuberant', 'destruction', 'present'];

const result = words.filter(word => word.length > 6);

console.log(result);
// expected output: Array ["exuberant", "destruction", "present"]

// Reduce - executes a user-supplied “reducer” callback function on each element of the array, in order, passing in the return value from the calculation on the preceding element. The final result of running the reducer across all elements of the array is a single value.
const array1 = [1, 2, 3, 4];
const reducer = (previousValue, currentValue) => previousValue + currentValue;

// 1 + 2 + 3 + 4
console.log(array1.reduce(reducer));
// expected output: 10

// 5 + 1 + 2 + 3 + 4
console.log(array1.reduce(reducer, 5));
// expected output: 15

// Find Method - returns the value of the first element in the provided array that satisfies the provided testing function. If no values satisfy the testing function, undefined is returned.
// Retrieve on element of an array based on a condition
// Needs a callback function that returns a boolean
const firstWithdrawal = account1.movements.find(mov => mov < 0);
console.log(account1.movements);
console.log(firstWithdrawal);

const account = accounts.find(acc => (acc.owner = 'Jessica Davis'));
console.log(account1);

// findindex method - returns the index of the first element in the array that satisfies the provided testing function. Otherwise, it returns -1, indicating that no element passed the test
// Returns the index of the condition and not the value
const array1 = [5, 12, 8, 130, 44];

const isLargeNumber = (element) => element > 13;

console.log(array1.findIndex(isLargeNumber));
// expected output: 3

// Some Method - tests whether at least one element in the array passes the test implemented by the provided function. It returns true if, in the array, it finds an element for which the provided function returns true; otherwise it returns false. It doesn't modify the array.(param => condition)
const array = [1, 2, 3, 4, 5];

// checks whether an element is even
const even = (element) => element % 2 === 0;

console.log(array.some(even));
// expected output: true

// Every Method - tests whether all elements in the array pass the test implemented by the provided function. It returns a Boolean value.
array.every(mov => condition)

// You can use a seperate callback function stored in a variable for most of the methods that require a callback function
const deposit = mov => mov > 0;
array.some(deposit);

// Flat Method - The flat() method creates a new array with all sub-array elements concatenated into it recursively up to the specified depth.
// No callback function for this method
const arr = [[1, 2, 3], [4, 5, 6], 7, 8];
console.log(arr.flat());
// The () will determine how deep to flatten the array: Default is 1
const arrDeep = [[[1, 2], 3], [4, [5, 6]], 7, 8];
console.log(arr.flat(2));

const accountMovements = accounts.map(acc => acc.movements);
console.log(accountMovements);
const allMovements = accountMovements.flat();
console.log(allMovements);

// FlatMap Method - The flatMap() method returns a new array formed by applying a given callback function to each element of the array, and then flattening the result by one level
// Combines the map and the flat methods
// Cannot change how deep the method goes. Only 1 level.
const overallBalance = accounts
    .flatMap(acc => acc.movements)
    .reduce((acc, mov) => acc + mov, 0);
console.log(overallBalance);

// Sorting Arrays - The sort() method sorts the elements of an array in place and returns the sorted array. The default sort order is ascending, built upon converting the elements into strings
// Sort will mutate the original array
// The sort method will also convert to string then sort

// Strings
const owners = ['Jonas', 'Zach', 'Adam', 'Martha'];
console.log(owners.sort());

// Numbers
const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];
console.log(movements);

// Acending
console.log(
    movements.sort((a, b) => {
        if (a > b) return 1;
        if (a < b) return -1;
    })
);

// Acending Refactored
movements.sort((a, b) => a - b);
console.log(movements);
Decending
console.log(
    movements.sort((a, b) => {
        if (a > b) return -1;
        if (a < b) return 1;
    })
);

// Decending Refactored
movements.sort((a, b) => b - a);
console.log(movements);

// Progamatically create and fill arrays
// Fill Method - The sort() method sorts the elements of an array in place and returns the sorted array. The default sort order is ascending, built upon converting the elements into strings
// fill(value)
// fill(value, start)
// fill(value, start, end)
// Array.from(length: [#], () => condition)
const array1 = [1, 2, 3, 4];

// fill with 0 from position 2 until position 4
console.log(array1.fill(0, 2, 4));
// expected output: [1, 2, 0, 0]

// fill with 5 from position 1
console.log(array1.fill(5, 1));
// expected output: [1, 5, 5, 5]

console.log(array1.fill(6));
// expected output: [6, 6, 6, 6]

// Summary - Ask what you want to do and you can figure out what method to use
// Mutate the original array
// Add to the original array: .push() and .unshift()
// Remove from the original array: .pop(), .shift() and .splice()
// Others: .reverse(), .sort() and .fill()

// A New Array:
// Computed from original: .map()
// Filter using condition: filter()
// Portion of the original: .slice()
// Adding original to another: .concat()
// Flattening the original: flat() and flatMap()

// An Array Index
// Based on value: .indexOf()
// Based on test condition: .findIndex()

// An Array Element
// Based on test condition: .find()

// Know if an Array includes
// Based on value: .includes()
// Based on test condition: .some() and .every()

// A new string
// Based on seperator string: .join()

// To transform to value
// Based on accumulator: .reduce()

// To just loop the array
// Based on callback: .forEach()


/////////////////////////////////////////////////////////////////////////////
////////////////////////////Introduction to Objects//////////////////////////
const jonasArray = [
    'Jonas',
    'Schmedtmann',
    2037 - 1991,
    'teacher',
    ['Michael', 'Peter', 'Steven']
];

const jonas = {
    firstName: 'Jonas',
    lastName: 'Schmedtmann',
    age: 2037 - 1991,
    job: 'teacher',
    friends: ['Michael', 'Peter', 'Steven']
};


///////////////////////////////////////
// Dot vs. Bracket Notation
const jonas = {
    firstName: 'Jonas',
    lastName: 'Schmedtmann',
    age: 2037 - 1991,
    job: 'teacher',
    friends: ['Michael', 'Peter', 'Steven']
};
console.log(jonas);

console.log(jonas.lastName);
console.log(jonas['lastName']);

const nameKey = 'Name';
console.log(jonas['first' + nameKey]);
console.log(jonas['last' + nameKey]);

// console.log(jonas.'last' + nameKey) // Cannot be done

const interestedIn = prompt('What do you want to know about Jonas? Choose between firstName, lastName, age, job, and friends');

if (jonas[interestedIn]) {
    console.log(jonas[interestedIn]);
} else {
    console.log('Wrong request! Choose between firstName, lastName, age, job, and friends');
}

jonas.location = 'Portugal';
jonas['twitter'] = '@jonasschmedtman';
console.log(jonas);

// Challenge
// "Jonas has 3 friends, and his best friend is called Michael"
console.log(`${jonas.firstName} has ${jonas.friends.length} friends, and his best friend is called ${jonas.friends[0]}`);


///////////////////////////////////////
// Object Methods

const jonas = {
    firstName: 'Jonas',
    lastName: 'Schmedtmann',
    birthYeah: 1991,
    job: 'teacher',
    friends: ['Michael', 'Peter', 'Steven'],
    hasDriversLicense: true,
    // This function cannot acces the birthYeah key
    // calcAge: function (birthYeah) {
    //   return 2037 - birthYeah;
    // },
    // This can now access the birthYeah key and get its value with this.(key)
    calcAge: function () {
        // console.log(this);
        return 2037 - this.birthYeah;
    },
    // Assigning new object key (age) with the value of 2037 - birthYeah
    calcAge: function () {
        this.age = 2037 - this.birthYeah;
        return this.age;
    },
    // You can access the object keys and values in template literals as well
    getSummary: function () {
        return `${this.firstName} is a ${this.calcAge()}-year old ${jonas.job}, and he has ${this.hasDriversLicense ? 'a' : 'no'} driver's license.`
    }
};

console.log(jonas.calcAge());

console.log(jonas.age);
console.log(jonas.age);
console.log(jonas.age);


//////////////////////////////////////////////////////////////////////
/////////////////////// Iteration: The for Loop /////////////////////

console.log('Lifting weights repetition 1 🏋️‍♀️');
console.log('Lifting weights repetition 2 🏋️‍♀️');
console.log('Lifting weights repetition 3 🏋️‍♀️');
console.log('Lifting weights repetition 4 🏋️‍♀️');
console.log('Lifting weights repetition 5 🏋️‍♀️');
console.log('Lifting weights repetition 6 🏋️‍♀️');
console.log('Lifting weights repetition 7 🏋️‍♀️');
console.log('Lifting weights repetition 8 🏋️‍♀️');
console.log('Lifting weights repetition 9 🏋️‍♀️');
console.log('Lifting weights repetition 10 🏋️‍♀️');

// for loop keeps running while condition is TRUE
for (let rep = 1; rep <= 30; rep++) {
    console.log(`Lifting weights repetition ${rep} 🏋️‍♀️`);
}


//////////////////////////////////////////////////////////////////////////
///////////// Looping Arrays, Breaking and Continuing  //////////////////
const jonas = [
    'Jonas',
    'Schmedtmann',
    2037 - 1991,
    'teacher',
    ['Michael', 'Peter', 'Steven'],
    true
];
const types = [];

console.log(jonas[0])
console.log(jonas[1])
console.log(jonas[4])
// jonas[5] does NOT exist

for (let i = 0; i < jonas.length; i++) {
    // Reading from jonas array
    console.log(jonas[i], typeof jonas[i]);

    // Filling types array
    types[i] = typeof jonas[i];
    types.push(typeof jonas[i]);
}

console.log(types);

const years = [1991, 2007, 1969, 2020];
const ages = [];

for (let i = 0; i < years.length; i++) {
    ages.push(2037 - years[i]);
}
console.log(ages);

// continue and break
console.log('--- ONLY STRINGS ---')
for (let i = 0; i < jonas.length; i++) {
    if (typeof jonas[i] !== 'string') continue; // IF THE TYPE OF THE CURRENT ELEMENT IS NOT A STRING THEN CONTINUE WITH THE LOOP AND SKIP THE OTHER TYPES

    console.log(jonas[i], typeof jonas[i]);
}

console.log('--- BREAK WITH NUMBER ---')
for (let i = 0; i < jonas.length; i++) {
    if (typeof jonas[i] === 'number') break; // THIS WILL STOP AT THE FIRST NUMBER FOUND AND END THE LOOP

    console.log(jonas[i], typeof jonas[i]);
}


/////////////////////////////////////////////////////////////////////
////////////// Looping Backwards and Loops in Loops ////////////////
const jonas = [
    'Jonas',
    'Schmedtmann',
    2037 - 1991,
    'teacher',
    ['Michael', 'Peter', 'Steven'],
    true
];

// 0, 1, ..., 4
// 4, 3, ..., 0

for (let i = jonas.length - 1; i >= 0; i--) {
    console.log(i, jonas[i]);
}

for (let exercise = 1; exercise < 4; exercise++) {
    console.log(`-------- Starting exercise ${exercise}`);

    for (let rep = 1; rep < 6; rep++) {
        console.log(`Exercise ${exercise}: Lifting weight repetition ${rep} 🏋️‍♀️`);
    }
}


//////////////////////////////////////////////////////////////////
//////////////////// The while Loop /////////////////////////////
for (let rep = 1; rep <= 10; rep++) {
    console.log(`Lifting weights repetition ${rep} 🏋️‍♀️`);
}

let rep = 1;
while (rep <= 10) {
    // console.log(`WHILE: Lifting weights repetition ${rep} 🏋️‍♀️`);
    rep++;
}

let dice = Math.trunc(Math.random() * 6) + 1;

while (dice !== 6) {
    console.log(`You rolled a ${dice}`);
    dice = Math.trunc(Math.random() * 6) + 1;
    if (dice === 6) console.log('Loop is about to end...');
}
})();