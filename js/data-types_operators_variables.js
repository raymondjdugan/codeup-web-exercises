// Exercise 1
var a = 1;
var b = a++;
var c = ++a;
// // what is the value of a, b, and c?
// Answer
// a = 3, b = 1, c = 3
console.log(a);
console.log(b);
console.log(c);
var d = 'hello';
var e = false;

d++;
e++;
//Answer:
// d = NaN
// e = 1
console.log(d);
console.log(e);
var perplexed; // perplexed is undefined (no value is assigned)
// Answer:
perplexed + 2; // still undefined
console.log(perplexed);

var price = 2.7;
price.toFixed(2);
// Answer:
// 2.70
console.log(price.toFixed(2));

// var price = '2.7';
// price.toFixed(2);
// // Answer:
// // Error: method toFixed is not a method of a string
// console.log(price.toFixed(2));

// isNaN(0) = false
console.log(isNaN(0));
// isNaN(1) = false
console.log(isNaN(1));
// isNaN("") = false
console.log(isNaN(''));
// isNaN("string") = true
console.log(isNaN('string'));
// isNaN("0") = false
console.log(isNaN('0'));
// isNaN("1") = false
console.log(isNaN('1'));
// isNaN("3.145") = false
console.log(isNaN('3.145'));
// isNaN(Number.MAX_VALUE) = false
console.log(isNaN(Number.MAX_VALUE));
// isNaN(Infinity) = false
console.log(isNaN(Infinity));
// isNaN("true") = true
console.log(isNaN('true'));
// isNaN(true) = false
console.log(isNaN(true));
// isNaN("false") = true
console.log(isNaN('false'));
// isNaN(false) = false
console.log(isNaN(false));
// // to illustrate why the isNaN() function is needed:
// NaN == NaN = false
console.log(NaN == NaN);
// !true = false
console.log(!true);
// !false = true
console.log(!false);

// !!true = true
console.log(!!true);
// !!false = false
console.log(!!false);
// !!0

// !!-0

// !!1

// !!-1

// !!0.1

// !!"hello"

// !!""

// !!''

// !!"false"

// !!"0"
