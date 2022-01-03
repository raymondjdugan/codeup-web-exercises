(function () {
    'use strict';
    // 1/3/22
    // 1. Write a function called add(num1, num2) which returns the sum of num1 and num2\
    // console.log('---Adding function----');
    // const add = function(num1, num2) {
    //     return num1 + num2;
    // }
    // console.log(add(5, 7));
    // console.log(add(9, -7));
    // console.log(add(5, 10));
    // console.log(add(5, 5));

    // 2. Write a function named square(numToSqr) which takes in a number (numToSqr) and returns the number multiplied
    // by itself
    // console.log('---Squaring function----');
    // const square = function(numToSqr) {
    //     return numToSqr * numToSqr;
    // }
    // console.log(square(5));
    // console.log(square(2));
    // console.log(square(3));
    // console.log(square(10));
    // 3. Write a function called sumOfSquares(a, b).
    //     You should find the square of a, then the square of b.
    //     Invoke add(num1, num2) and pass the new squared values in as arguments.
    // console.log('---Adding Square function----');
    // const sumOfSquares = function(a, b) {
    //     return add(square(a), square(b));
    // }
    // console.log(sumOfSquares(2, 2));
    // console.log(sumOfSquares(3, 3));
    // console.log(sumOfSquares(10, 2));

    // 1. Write a function named getFizzBuzz(startingNum) which performs the following actions:
    //     If startingNum is divisible by 3,
    //     console log "fizz"
    // 2. Else, if startingNum is divisible by 5
    //    console log "buzz"
    // 3. If startingNum is divisible by 3 AND divisible by 5
    //      return a string which says "FIZZ BUZZ"
    // 4. Thinking about getFizzBuzz(startingNum), let's console log the return value of this function
    //      What if getFizzBuzz doesn't return a value (VOID)?
    //      How do you want to handle that?
    function getFizzBuzz(startingNum) {

        if (startingNum % 3 === 0 && startingNum % 5 === 0) {
            return 'FIZZ BUZZ'
        } else if (startingNum % 3 === 0) {
            console.log('fizz');
        } else if (startingNum % 5 === 0) {
            console.log('buzz');
        }
    }
let getFizzUnK =getFizzBuzz(5);
if(getFizzUnK) {
    console.log(getFizzUnK)
}

}());