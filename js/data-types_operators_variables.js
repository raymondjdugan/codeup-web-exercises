'use strict'
// // Exercise 1
// var a = 1;
// var b = a++;
// var c = ++a;
// // // what is the value of a, b, and c?
// // Answer
// // a = 3, b = 1, c = 3
// console.log(a);
// console.log(b);
// console.log(c);
// var d = 'hello';
// var e = false;
//
// d++;
// e++;
// //Answer:
// // d = NaN
// // e = 1
// console.log(d);
// console.log(e);
// var perplexed; // perplexed is undefined (no value is assigned)
// // Answer:
// perplexed + 2; // still undefined
// console.log(perplexed);
//
// var price = 2.7;
// price.toFixed(2);
// // Answer:
// // 2.70
// console.log(price.toFixed(2));
//
// // var price = '2.7';
// // price.toFixed(2);
// // // Answer:
// // // Error: method toFixed is not a method of a string
// // console.log(price.toFixed(2));
//
// // isNaN(0) = false
// console.log(isNaN(0));
// // isNaN(1) = false
// console.log(isNaN(1));
// // isNaN("") = false
// console.log(isNaN(''));
// // isNaN("string") = true
// console.log(isNaN('string'));
// // isNaN("0") = false
// console.log(isNaN('0'));
// // isNaN("1") = false
// console.log(isNaN('1'));
// // isNaN("3.145") = false
// console.log(isNaN('3.145'));
// // isNaN(Number.MAX_VALUE) = false
// console.log(isNaN(Number.MAX_VALUE));
// // isNaN(Infinity) = false
// console.log(isNaN(Infinity));
// // isNaN("true") = true
// console.log(isNaN('true'));
// // isNaN(true) = false
// console.log(isNaN(true));
// // isNaN("false") = true
// console.log(isNaN('false'));
// // isNaN(false) = false
// console.log(isNaN(false));
// // // to illustrate why the isNaN() function is needed:
// // NaN == NaN = false
// console.log(NaN == NaN);
// // !true = false
// console.log(!true);
// // !false = true
// console.log(!false);
// // !!true = true
// console.log(!!true);
// // !!false = false
// console.log(!!false);
// // !!0 = false
// console.log(!!0);
// // !!-0 = false
// console.log(!!-0);
// // !!1 = true
// console.log(!!1);
// // !!-1 = true
// console.log(!!-1);
// // !!0.1
// console.log(!!0.1);
// // !!"hello" = true
// console.log('hello');
// // !!"" = false
// console.log(!!"")
// // !!'' = false
// console.log(!!'')
// // !!"false" = true
// console.log(!!"false")
// // !!"0" = true
// console.log(!!"0")

// Exercise 2
// var sample = "Hello Codeup";
// console.log(sample.length);
// console.log(sample.toUpperCase());
// console.log(sample.toLowerCase());
// console.log(sample = sample + ' Students');
// console.log(sample.replace('Students', 'Class'));
// console.log(sample.indexOf('c'));
// console.log(sample.indexOf("C"));
// console.log(sample.substring(sample.indexOf('C'), sample.indexOf('S')));

// Exercise 3
// 3.1
// let littleMermaid = 3;
// let brotherBear = 5;
// let hercules = 1;
// let pricePerDay = 3;
// console.log(littleMermaid * pricePerDay + brotherBear * pricePerDay + hercules * pricePerDay);
// 3.2

// 3.3
// let student = 1;
// let enrolledStudents = 15;
// let fullClass = student + enrolledStudents;
// let doesNotConflict = false;
// if (fullClass >= 20 || !doesNotConflict)  {
//     console.log('You may enroll in this class')
// } else {
//         console.log("You have to choose another class")
// }

// 3.4
// let boughtItems = 3;
// let expired = false;
// let isPremium = true;
// if (boughtItems > 2 && !expired || isPremium) {
//     console.log('You may purchase')
// } else {
//     console.log('You may not purchase.')
// }
//
//
// // Exercise 4
//
// let username = 'codeup'
// let password = 'notastrongpassword';
// let passLength = password.length >= 5;
// console.log(passLength);
// let notIncludeUsername = password.includes(username);
// console.log(notIncludeUsername);
// let userNameLength = username.length <= 20;
// console.log(userNameLength);
// let userStartsWithWhitespace = username.startsWith(" ");
// console.log(userStartsWithWhitespace);
// let userEndsWithWhitespace = username.endsWith(" ");
// console.log(userEndsWithWhitespace);
// let passwordStartsWithWhitespace = username.startsWith(" ");
// console.log(passwordStartsWithWhitespace);
// let passwordEndsWithWhitespace = username.endsWith(" ");
// console.log(passwordEndsWithWhitespace);

