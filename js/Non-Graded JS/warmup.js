(function () {
    'use strict';
    // 12/10/21
    // Their credit score must be over 680 AND have at least $4000 on-hand
    // OR, they must have at least $10000 on-hand
    // let creditScore = 700;
    // let cashOnHand = 12000;
    //
    // if(creditScore > 680 && cashOnHand >= 4000 || cashOnHand >= 10000) {
    //     console.log('You can have the loan!')
    // } else {
    //     console.log('You cannot have the loan')
    // }

    // 12/13/21
    //Declare a function called 'isFive' that takes in an input and returns true if that input is the number five.
    // Otherwise it should return false. let random = Math.floor((Math.random() * 5) + 1); console.log(random);
    // function isFive(number) { return number === 5; } console.log(isFive(random));

    //Make a function named isMultipleOfThree that takes in an input and returns a boolean indicating whether or not
    // the input is a multiple of three.
    // function isMultipleOfThree(someNumber){
    // return someNumber % 3 === 0 ? true : false;
    // }

    // console.log(isMultipleOfThree(15));
    // console.log(isMultipleOfThree(10));

    // 12\20\2021
    // Write a function that prints out the prime number up to 50
    // function test_prime(number) {
    //     if (number === 0 || number === 1) {
    //         return false;
    //     } else if (number === 2) {
    //         return true;
    //     } else {
    //         for (let x = 2; x < number; x++) {
    //             if (number % x === 0) {
    //                 return false;
    //             }
    //         }
    //         return true;
    //     }
    // }
    // let count = 0;
    // while (count < 50) {
    //     if (test_prime(count) === true) {
    //         console.log(count);
    //     }
    //     count++;
    // }

    // 12/27/2011
    // Create a function named roll. It should accept a string that describes how many times the dice is being rolled
    // and the number of sides on the dice, for example: 3d4 means 3 4-sided dice 1d20 means 1 20-sided dice 2d6 means
    // 2 6-sided dice The function should return an object with properties rolls: an array of the individual rolls, and
    // total, which is the sum of the individual rolls

    // function roll(rolled) {
//   const [timesToRoll, sizeOfDice] = rolled.split('d');
//   const rolledArray = [];
//   let rollTotal = 0;
//   for (let i = 0; i < timesToRoll; i++) {
//     const diceRoll = Math.trunc(Math.random() * sizeOfDice) + 1;
//     rolledArray.push(diceRoll);
//     rollTotal += diceRoll;
//   }

//   return {
//     roll: rolledArray,
//     total: rollTotal,
//   };
// }

    function roll(rolled) {
        const gameRoll = {
            rolls: [],
            rollTotal: 0,
        };
        const [timesToRoll, sizeOfDice] = rolled.split('d');
        for (let i = 0; i < timesToRoll; i++) {
            const diceRoll = Math.trunc(Math.random() * sizeOfDice) + 1;
            gameRoll.rolls.push(diceRoll);
            gameRoll.rollTotal += diceRoll;
        }
        return gameRoll;
    }

    console.log(roll('4d6'));
    console.log(roll('3d20'));
    console.log(roll('5d6'));

// function roll(rolled) {
//  const [timesToRoll, sizeOfDice] = rolled.split('d');
//  const rolls = [];
//  let rollTotal = 0;
//  for (let i = 0; i < timesToRoll; i++) {
//      const diceRoll = Math.trunc(Math.random() * sizeOfDice) + 1;
//      rolls.push(diceRoll);
//      rollTotal += diceRoll;
//  }

//  return `{\n\trolls: [${rolls.join(', ')}],\n\ttotal: ${rollTotal},\n}`;
// }


})();