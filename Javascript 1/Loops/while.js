(function () {
    'use strict';
    // Create a file named while.js in the js directory.
    //
    // Create a while loop that uses console.log() to create the output shown below.
    //
    //
    // 2
    // 4
    // 8
    // 16
    // 32
    // 64
    // 128
    // 256
    // 512
    // 1024
    // 2048
    // 4096
    // 8192
    // 16384
    // 32768
    // 65536
    //ANSWER:
    let number = 0;
    let num = 1;
    while (number <= 15) {
        num *= 2;
        number++;
        console.log(num);
    }

// An ice cream seller can't go home until she sells all of her cones. First write enough code that generates a
// random number between 50 and 100 representing the amount of cones to sell before you start your loop. Inside of the
// loop your code should generate another random number between 1 and 5, simulating the amount of cones being bought by
// her clients. Use a do-while loop to log to the console the amount of cones sold to each person. This is a way get
// the random numbers for this exercise.
//
//
// // This is how you get a random number between 50 and 100
//     let allCones = Math.floor(Math.random() * 50) + 50;
// // This expression will generate a random number between 1 and 5
//     Math.floor(Math.random() * 5) + 1;
//     The output should be similar to the following:
//
//         5 cones sold...  // if there are enough cones
//     Cannot sell you 6 cones I only have 3...  // If there are not enough cones
//     Yay! I sold them all! // If there are no more cones

    // Random number for allCones between 1-50
    let allCones = Math.floor(Math.random() * 50) + 1;
    do {
        // Random number for how many cones bought
        const conesBought =Math.floor(Math.random() * 5) + 1;
        // If the conesBought is greater than allCones, log message and continue
        if(conesBought > allCones) {
            console.log(`Cannot sell you ${conesBought} cones, as I only have ${allCones} cones`);
            continue;
        }
        // Subtracting conesBought from allCones
        allCones -= conesBought;
        // Logging how many cones are left
        console.log(`${conesBought} cones sold`);

    } while (allCones > 0);
    console.log(`Yay! I sold them all!`);


// TODO: MINI EXERCISE
// TODO: print all even numbers between 0 and 25;
let counter = 0 ;
while (counter >= 0 && counter < 25) {
    if (counter % 2 === 0){
        console.log(counter)
    }
    counter++;
}

})();