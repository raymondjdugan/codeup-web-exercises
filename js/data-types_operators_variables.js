(function () {

// TODO: For each of the following code blocks, read the code and predict what the result of evaluating it would be,
//  then execute the statement(s) in the Chrome console.
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
// !!0 = false
console.log(!!0);
// !!-0 = false
console.log(!!-0);
// !!1 = true
console.log(!!1);
// !!-1 = true
console.log(!!-1);
// !!0.1
console.log(!!0.1);
// !!"hello" = true
console.log('hello');
// !!"" = false
console.log(!!"")
// !!'' = false
console.log(!!'')
// !!"false" = true
console.log(!!"false")
// !!"0" = true
console.log(!!"0")

// TODO: Exercise 2
//  Execute the following statement in the Chrome JavaScript console and then follow the directions below.
var sample = "Hello Codeup";
console.log(sample.length);
console.log(sample.toUpperCase());
console.log(sample.toLowerCase());
console.log(sample = sample + ' Students');
console.log(sample.replace('Students', 'Class'));
console.log(sample.indexOf('c'));
console.log(sample.indexOf("C"));
console.log(sample.substring(sample.indexOf('C'), sample.indexOf('S')));

// TODO: Exercise 3
//  Write some JavaScript code, that is, variables and operators, to describe the following scenarios.
//  Do not worry about the real operations to get the values
//  The goal of these exercises is to understand how real world conditions can be represented with code.
//  3.1
//  You have rented some movies for your kids:
//  The little mermaid (for 3 days), Brother Bear (for 5 days, they love it),
//  and Hercules (1 day, you don't know yet if they're going to like it).
//  If price for a movie per day is $3, how much will you have to pay?

let littleMermaid = 3;
let brotherBear = 5;
let hercules = 1;
let pricePerDay = 3;
console.log(littleMermaid * pricePerDay + brotherBear * pricePerDay + hercules * pricePerDay);

// TODO: 3.2
//  Suppose you're working as a contractor for 3 companies: Google, Amazon and Facebook
//  They pay you a different rate per hour. Google pays $400, Amazon $380, and Facebook $350.
//  How much will you receive in payment for this week?
//  You worked 10 hours for Facebook, 6 hours for Google and 4 hours for Amazon.

let googlePay = 400;
let amazonPay = 380;
let facebookPay = 350;
let googleHoursWorked = 6;
let amazonHoursWorked = 4;
let facebookHoursWorked = 10;
let googlePayTotal = googlePay * googleHoursWorked;
let amazonPayTotal  = amazonPay * amazonHoursWorked;
let facebookPayTotal = facebookPay * facebookHoursWorked;
console.log(`The total amount of pay is $${googlePayTotal + amazonPayTotal + facebookPayTotal}.`);

// TODO: 3.3
//  A student can be enrolled in a class only if the class is not full
//  and the class schedule does not conflict with her current schedule.

let student = 1;
let enrolledStudents = 15;
let fullClass = student + enrolledStudents;
let doesNotConflict = false;
if (fullClass >= 20 || !doesNotConflict)  {
    console.log('You may enroll in this class')
} else {
        console.log("You have to choose another class")
}

// TODO: 3.4 A product offer can be applied only if a person buys more than 2 items, and the offer has not expired.
//  Premium members do not need to buy a specific amount of products.

let boughtItems = 3;
let expired = false;
let isPremium = true;
if (boughtItems > 2 && !expired || isPremium) {
    console.log('You may purchase')
} else {
    console.log('You may not purchase.')
}


//  TODO: Exercise 4
//   Use the following code to follow the instructions below:
//      var username = 'codeup';
//      var password = 'notastrongpassword';
//   1. Create a variable that holds a boolean value for each of the following conditions:
//      a. The password must be at least 5 characters
//      b. The password must not include the username
//      c. The username must be no more than 20 characters
//      d. Neither the username or password can start or end with whitespace

let username = 'codeup'
let password = 'notastrongpassword';
let passLength = password.length >= 5;
console.log(passLength);
let notIncludeUsername = password.includes(username);
console.log(notIncludeUsername);
let userNameLength = username.length <= 20;
console.log(userNameLength);
let userStartsWithWhitespace = username.startsWith(" ");
console.log(userStartsWithWhitespace);
let userEndsWithWhitespace = username.endsWith(" ");
console.log(userEndsWithWhitespace);
let passwordStartsWithWhitespace = username.startsWith(" ");
console.log(passwordStartsWithWhitespace);
let passwordEndsWithWhitespace = username.endsWith(" ");
console.log(passwordEndsWithWhitespace);

})();
