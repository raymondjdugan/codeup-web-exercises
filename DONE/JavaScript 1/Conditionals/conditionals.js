"use strict";

/* ########################################################################## */

/**
 * TODO:
 * Create a function named `analyzeColor` that accepts a string that is a color
 * name as input. This function should return a message which relates to the
 * color stated in the argument of the function. For colors you do not have
 * responses written for, return a string stating so
 *
 * Example:
 *  > analyzeColor('blue') // returns "blue is the color of the sky"
 *  > analyzeColor('red') // returns "Strawberries are red"
 *
 *
 *  > analyzeColor('cyan') // returns "I don't know anything about cyan"
 *
 * You should use an if-else-if-else block to return different messages.
 *
 * Test your function by passing various string literals to it and
 * console.logging the function's return value
 */
// function analyzeColor(color){
//     if(color === 'blue'){
//        console.log(`${color.charAt(0).toUpperCase() + color.slice(1)} is the color of the sky`);
//     } else if(color === 'red') {
//         console.log(`Apples are ${color}`);
//     } else if(color === 'yellow'){
//         console.log(`Banana's are ${color}`);
//     } else if(color === 'green') {
//         console.log(`Grape's are ${color}`);
//     } else {
//         console.log(`No information about ${color}`);
//     }
//
// }
// analyzeColor('blue');
// analyzeColor('red');
// analyzeColor('green');
// analyzeColor('indigo');



// Don't change the next two lines!
// These lines create two variables for you:
// - `colors`: a list of the colors of the rainbow
// - `randomColor`: contains a single random color value from the list (this
//                  will contain a different color every time the page loads)
// var colors = ['red', 'orange', 'yellow', 'green', 'blue', 'indigo', 'violet'];
// var randomColor = colors[Math.floor(Math.random() * colors.length)];
/**
 * TODO:
 * Pass the `randomColor` variable to your 'analyzeColor' function and console.log the results.
 * You should see a different message every time you refresh the page
 */
// console.log(analyzeColor(randomColor));

/**
 * TODO:
 * Comment out the code above, and refactor your function to use a switch-case statement
 */
// function analyzeColor(color){
//     switch (color) {
//         case 'blue':
//             `${color} is the color of the sky`;
//             break;
//         case 'red':
//             `Apples are ${color}`;
//             break;
//         case 'yellow':
//             `Banana's are ${color}`;
//             break;
//         case 'green':
//             `Grape's are ${color}`;
//             break;
//         default:
//             `No information about ${color}`;
//              break;
//     }
// }
// console.log(analyzeColor(randomColor));
/**
 * TODO:
 * Prompt the user for a color when the page loads, and pass the input from the
 * user to your `analyzeColor` function. Alert the return value from your
 * function to show it to the user.
 */
// let colorResponse = prompt('Insert a color. IE blue.');
// alert(analyzeColor(colorResponse));


/* ########################################################################## */

/**
 * TODO:
 * Suppose there's a promotion in Walmart, each customer is given a randomly
 * generated "lucky number" between 0 and 5. If your lucky number is 0 you have
 * no discount, if your lucky number is 1 you'll get a 10% discount, if it's 2,
 * the discount is 25%, if it's 3, 35%, if it's 4, 50%, and if it's 5 you'll get
 * everything for free!.
 *
 * Write a function named `calculateTotal` which accepts a lucky number and total
 * amount, and returns the discounted price.
 *
 * Example:
 * calculateTotal(0, 100) // returns 100
 * calculateTotal(4, 100) // returns 50
 * calculateTotal(5, 100) // returns 0
 *
 * Test your function by passing it various values and checking for the expected
 * return value.
 */
// function calculateTotal(randNum, totalBeforeDiscount){
//     switch(randNum) {
//         case 0:
//             console.log(`You did not get a discount. Your total is $${totalBeforeDiscount}.`);
//             break;
//         case 1:
//             console.log(`You get a 10% discount. Your total is $${totalBeforeDiscount - (totalBeforeDiscount * .10)}.`);
//             break;
//         case 2:
//             console.log(`You get a 25% discount. Your total is $${totalBeforeDiscount - (totalBeforeDiscount * .25)}.`);
//             break;
//         case 3:
//             console.log( `You get a 35% discount. Your total is $${totalBeforeDiscount - (totalBeforeDiscount * .35)}.`);
//             break;
//         case 4:
//             console.log(`You get a 50% discount. Your total is $${totalBeforeDiscount - (totalBeforeDiscount * .50)}.`);
//             break;
//         default:
//             console.log(`Jackpot! Your get 100% off! Your total is $0.00.`);
//     }
// }
// calculateTotal(0, 100) // returns 100
// calculateTotal(4, 100) // returns 50
// calculateTotal(5, 100) // returns 0
/**
 * TODO:
 * Uncomment the line below to generate a random number between 0 and 5.
 * (In this line of code, 0 is inclusive, and 6 is exclusive)
 * Prompt the user for their total bill, then use your `calculateTotal` function
 * and alerts to display to the user what their lucky number was, what their
 * price before the discount was, and what their price after the discount is.
 */
// Generate a random number between 0 and 6
// var luckyNumber = Math.floor(Math.random() * 6);
//
// let totalBill = parseInt(prompt('What is your total bill?'));
// alert(calculateTotal(luckyNumber, totalBill));
/**
 * TODO:
 * Write some JavaScript that uses a `confirm` dialog to ask the user if they
 * would like to enter a number. If they click 'Ok', prompt the user for a
 * number, then use 3 separate alerts to tell the user:
 *
 * - whether the number is even or odd
 * - what the number plus 100 is
 * - if the number is negative or positive
 *
 * Do *NOT* display any of the above information
 * if the user enters a value that is not of the number data type.
 * Instead, use an alert to inform them of the incorrect input data type.
 *
 *
 * Can you refactor your code to use functions?
 * HINT: The way we prompt for a value could be improved
 */
//Collect confirm response as a true or false
// let userResponse = confirm('Would you like to enter a number?');
// // Function to verify the user wants to enter a number
// function userVerify(userResponse){
//     if(userResponse === true){
//         return prompt("What is the number you would like to enter?");
//     } else {
//          return alert("You choose not to enter a number!");
//     }
// }
// // Stored the result of the userVerify function
// let userNumber = userVerify(userResponse);
// // Checks the user response for even or odd
// function isEvenOrOdd(numberResponse){
//     if(numberResponse % 2 === 0){
//         alert(`${numberResponse} is an even number.`);
//     } else {
//         alert(`${numberResponse} is an odd number.`);
//     }
// }
// // Adds the user input to 100
// function numberPlus100(numberResponse) {
//     alert(parseInt(numberResponse) + 100);
// }
// // Checks the user input to determine if it is negative or positive
// function isNegativeOrPositive(numberResponse) {
//     if(numberResponse.charAt(0) === '-' ){
//         alert(`${numberResponse} is a negative number.`);
//     } else {
//         alert(`${numberResponse} is a positive number`);
//     }
// }
// // Checks if the response is a number value and calls the three functions for output
// function responseToUser(numberResponse){
//     if(isNaN(numberResponse)){
//         alert(`${numberResponse} is the incorrect data type. Data type is a ${typeof numberResponse}.`);
//     } else {
//         isEvenOrOdd(numberResponse);
//         numberPlus100(numberResponse);
//         isNegativeOrPositive(numberResponse);
//     }
// }
// responseToUser(userNumber);

// console.log(isNegativeOrPositive(userVerify(userResponse)));
// Create a file named conditionals.js inside the js directory.
// Create a function called analyzeColor1 that takes a parameter called color
// In your function, use ONLY if statements to print the following:
// ???blue is the color of the sky??? if the value of color is ???blue???
// ???red is the color of love??? if the value of color is ???red???
// ???green is the color of envy??? if the value of color is ???green???
// ???I don???t know that color??? if the value of color is anything else
// HINT: use return in the conditional code blocks to prevent from printing multiple times for the same argument
// Add, commit, and push to GitHub.

// function analyzeColor(color){
//     if(color === 'blue'){
//         return `${color} is the color of the sky`;
//     }
//     if(color === 'red') {
//         return `${color} is the color of love`;
//     }
//     if(color === 'green') {
//         return `${color} is the color of envy`;
//     }
//     return `No information about ${color}`;
// }
//
// console.log(analyzeColor('red'));
// console.log(analyzeColor('green'));
// console.log(analyzeColor('indigo'));
// console.log(analyzeColor('blue'));
