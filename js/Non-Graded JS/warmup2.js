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
    // function getFizzBuzz(startingNum) {
    //     if (startingNum % 3 === 0 && startingNum % 5 === 0) {
    //         return 'FIZZ BUZZ'
    //     } else if (startingNum % 3 === 0) {
    //         console.log('fizz');
    //     } else if (startingNum % 5 === 0) {
    //         console.log('buzz');
    //     }
    // }
    //
    // function isFizzBuzzUnk(tests) {
    //     if (tests) {
    //         console.log(tests)
    //     }
    // }
    //
    // function testCaseFizzBuzz() {
    //     isFizzBuzzUnk(getFizzBuzz(3));
    //     isFizzBuzzUnk(getFizzBuzz(5));
    //     isFizzBuzzUnk(getFizzBuzz(15));
    // }
    //
    // testCaseFizzBuzz()

    // 1. Define a function named getPassword() which performs the following actions:
    //     Using prompt(), alert(), variables, and a while-loop, ask the user to input their password until their entry matches your hard-coded password value.
    // function getPassword(){
    //     let passwordCorrect = false;
    //     let attempts = 1;
    //     const password = 'Password';
    //     while (passwordCorrect === false) {
    //         const answer = prompt('What is your password');
    //         if (answer !== password) {
    //             if (attempts < 3) {
    //                 attempts++;
    //             } else if (attempts === 3) {
    //                 alert('You are locked out for too many attempts');
    //                 break;
    //             }
    //         } else if ( answer === password) {
    //             alert('That is the correct password');
    //             passwordCorrect = true;
    //         }
    //     }
    // }
    // getPassword();
    // 1. Write a function named getMeaningOfLife which accepts one parameter, meaningfulNum.
    //     i. This function will use a while loop to compare its current number (a variable named counter) against the meaningfulNum.
    //     ii. While the counter is not equivalent to the meaningfulNum, continue the loop.
    //         a. Once that condition is broken, console log a string telling the user "The meaning of life, the universe, and everything is [your meaningful number]"
    // 2. Thinking about the above function, getMeaningOfLife, let's ask a question: What happens if the value of
    // meaningfulNum is a non-numeric?
    //         i. Write some code to account for this case. How the function handles the situation is up to you!
    // 3. Let's continue with getMeaningOfLife: If the value of meaningfulNum happens to be 42, console log a
    // separate  message at the end of the function to say: "Did you bring your towel?"

    let answer = prompt('Enter a number');
    function getMeaningOfLife(meaningfulNum) {
        let actualNumber = parseInt(meaningfulNum);
        let counter = 0;

        if(actualNumber){
            while(counter !== actualNumber) {
                counter++;
            }
            alert(`The meaning of life, the universe, and everything is ${counter}`);
        } else {
            alert(`"${meaningfulNum}" is invalid. Please enter a number`);
        }
        if(actualNumber === 42) {
            alert('Did you bring a towel?');
        }
    }
    getMeaningOfLife(answer);

}());