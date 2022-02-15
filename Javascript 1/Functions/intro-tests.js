function count(input) {
    if(typeof input === 'string') {
        return input.length;
    } else {
        return false;
    }
}

function countTests(input){
    // count() returns the length value of a string
    let actualStringLength = count('Hello, Codeup');
    let expectedStringLength = 13;
    console.log(`Expect to return a number for the length of a string: ${actualStringLength === expectedStringLength}`);

    // count() can handle params being a number
    actualStringLength = count(13);
    expectedStringLength = false;
    console.log(`The expected string length for a number is: ${actualStringLength === expectedStringLength}`);

    // count() can handle params being a boolean
    actualStringLength = count(true);
    expectedStringLength = false;
    console.log(`Expect to handle a boolean : ${actualStringLength === expectedStringLength}`);

    // count() can handle params being undefined
    actualStringLength = count();
    expectedStringLength = false;
    console.log(`Expect to return false when the input is undefined: ${actualStringLength === expectedStringLength}`);

    // count() can handle params being undefined
    let stringTest = null;
    actualStringLength = count(stringTest);
    expectedStringLength = false;
    console.log(`Expect to return false when the input is null: ${actualStringLength === expectedStringLength}`);

}

countTests();