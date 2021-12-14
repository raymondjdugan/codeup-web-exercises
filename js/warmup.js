(function (){
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
    //Declare a function called 'isFive' that takes in an input and returns true if that input is the number five. Otherwise it should return false.
    // let random = Math.floor((Math.random() * 5) + 1);
    // console.log(random);
    // function isFive(number) {
    //     return number === 5;
    // }
    // console.log(isFive(random));

    //Make a function named isMultipleOfThree that takes in an input and returns a boolean indicating whether or not
    // the input is a multiple of three.
    function isMultipleOfThree(someNumber){
        return someNumber % 3 === 0 ? true : false;
    }

    console.log(isMultipleOfThree(15));
    console.log(isMultipleOfThree(10));
})();