// Create a file named analyze_input.js in the js directory.
// In that file, write a program that receives user input and analyzes the input differently if the input is a number or a string. If the input is a string, it will analyze the string differently if it is length 1.
// Following are the rules of analysis:
// If the input is a number:
// Output if the number is odd or even (zero is considered even). Use your function from Exercise 2 for this functionality.
// Output if the number is negative, positive, or zero
// If the input is a string:
// If the string’s length is 1, output if the string (or char) is a vowel or not
// Otherwise, output the length of the string
// Design your program to include a switch and at least one if/else. You must also make separate functions for each of the following pieces of program functionality:
// Determining if the input is a number, string, or otherwise. This function should be called analyzeInput
// Determining if a number is odd or even. Re-use your Exercise 2 function for this.
// Determining if a number is <, >, or equal to zero
// Determining if the string is a single character or not
// Determining if the length 1 string is a vowel or not
// Add, commit, and push to GitHub.

// Initialize userInput to a prompt
let userInput = prompt('Enter a number or a string. I.E. 5 or C or Cola.');
// Function to determine the type of the input
function analyzeInput(someInputFromUser) {
    if (!isNaN(someInputFromUser)) {
        isEvenOrOdd(someInputFromUser);
        isEqualToZero(someInputFromUser);
    } else if (isNaN(someInputFromUser)) {
        determineStringLength(someInputFromUser)
    }
}
// Check see if the input number is even or odd.
function isEvenOrOdd(someInputNumber) {
    if(someInputNumber % 2 === 0) {
        console.log(`${someInputNumber} is even.`);
    } else {
        console.log(`${someInputNumber} is odd.`);
    }
}
// Check to see if the input number is greater than, less than or equal to zero
function isEqualToZero(someInputNumber) {
    let parsedNumber = parseInt(someInputNumber);
    if (parsedNumber === 0) {
        console.log(`${someInputNumber} is equal to 0`);
    } else if (someInputNumber > 0) {
        console.log(`${someInputNumber} is greater than 0.`);
    } else if (someInputNumber < 0) {
        console.log(`${someInputNumber} is less than 0.`);
    }
}
// Determine the length of the string and call a function based on that length
// If string length is 1 execute determineIsVowel function
// If string length is more than 1 execute printLengthOfString function
function determineStringLength(someString){
    if (someString.length === 1) {
        determineIsVowel(someString);
    } else {
        printLengthOfString(someString);
    }
}
// Function to determine if a string is a vowel
function determineIsVowel(sameString) {
    switch (sameString) {
        case "a": case "e": case "i": case "o": case "u":
            console.log(`${sameString.toUpperCase()} is a vowel.`);
            break;
        default:
            console.log(`${sameString.toUpperCase()} is not a vowel.`)
    }
}
// Function to print the length of a string
function printLengthOfString(sameStringAsBefore) {
    console.log(`The length of the string is ${sameStringAsBefore.length}`);
}

// Calling the analyzeInput function
analyzeInput(userInput);