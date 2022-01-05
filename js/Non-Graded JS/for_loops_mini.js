(function () {
// TODO: MINI EXERCISE
//      Write a function which uses a for-loop and
//      -> accepts the number of times to iterate as a parameter
//      -> only logs *if the iteration number is odd*
    const isOdd = function (numIterations) {
        for (let i = 0; i < numIterations; i++) {
            // Check to see if the iteration is odd
            if (i % 2 === 1) {
                console.log(`${i} is odd`)
            }
        }
    }
    isOdd(25);
    console.log('-----------------------------')
// TODO: MINI EXERCISE
//      Write a function which uses a for-loop and
//      -> accepts the number of times to iterate as a parameter
//      -> logs "This is an even iteration" on the evens
//      -> logs "This is an odd iteration" on the odds
    const isEvenOrOdd = function (timesToIterate) {
        for (let i = 0; i < timesToIterate; i++) {
            // Ternary statement check to see if the iteration is even by getting the remainder
            // If even print out even statement : if odd print out odd statement
            i % 2 === 0 ? console.log(`${i}: This is an even iteration`) : console.log(`${i}: This is an odd iteration`);
        }
    }
    isEvenOrOdd(25);
    // isEvenOrOdd(40);
    console.log('-----------------------------')
// TODO: MINI EXERCISE
//      Make a new version of your getPassword function using a for-loop!
//      -> The purpose of the for-loop is to only allow a maximum number of attempts
//          -> If the max attempt used unsuccessfully, alert the user of such and RETURN or BREAK
//      -> Once the user enters the correct password, use the 'break' keyword to end the loop
//      -> After the loop concludes, alert the use they have entered the correct password
    // Setting password
    const password = 'password';
    // Creating function
    const getPassword = function () {
        // Initializing loop to run 3 times
        for (let i = 1; i <= 3; i++) {
            // Getting password from user
            const answer = prompt('Please enter your password');
            // Checking answer against the password
            // If correct: Send an alert and break the loop
            if(password === answer) {
                alert('CORRECT');
                break;
            }
            // If the answer is not the password: Send alert to inform user
            alert(`That is an incorrect password\n${3 - i} attempts left`);
            // If the user is wrong three times send another alert
            if(i === 3) alert('You have exceeded the number of attempts.\nYour account is PERMABANNED👺🔒');
        }
    }
    getPassword();
})();