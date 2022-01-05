(function(){
    "use strict";

    /**
     * TODO:
     * Create an array of 4 people's names and store it in a variable called
     * 'names'.
     */
    const names = ['Ray', 'Emilio', 'David', 'Brendan'];
    /**
     * TODO:
     * Create a log statement that will log the number of elements in the names
     * array.
     */
    console.log('------Accessing Length-------');
    console.log(names.length);
    /**
     * TODO:
     * Create log statements that will print each of the names individually by
     * accessing each element's index.
     */
    console.log('------Accessing values of indexes-------');
    console.log(names[0])
    console.log(names[1])
    console.log(names[2])
    console.log(names.at(3))

    /**
     * TODO:
     * Write some code that uses a for loop to log every item in the names
     * array.
     */
    console.log('--------FOR LOOP---------')
    for(let i = 0; i<names.length; i++) console.log(names[i]);
    /**
     * TODO:
     * Refactor your above code to use a `forEach` loop
     */
    console.log('--------FOREACH LOOP---------')
    names.forEach(name => console.log(name))
    /**
     * TODO:
     * Create the following three functions, each will accept an array and
     * return an an element from it
     * - first: returns the first item in the array
     * - second: returns the second item in the array
     * - last: returns the last item in the array
     *
     * Example:
     *  > first([1, 2, 3, 4, 5]) // returns 1
     *  > second([1, 2, 3, 4, 5]) // returns 2
     *  > last([1, 2, 3, 4, 5]) // return 5
     */
    const example = [1, 2, 3, 4, 5];
    console.log('------Returns the FIRST item in the array------');
    const first = function(arr) {
        return arr[0];
        // return arr.slice().shift();
    }
    console.log(first(example))

    console.log('------Returns the SECOND item in the array------');
    const second = function(arr) {
        return arr[1]
        // return arr.slice(2,3).pop();
    }
    console.log(second(example))

    console.log('------Returns the LAST item in the array------');
    const last = function(arr) {
        return arr[names.length]
        // return arr.slice().pop();
    }
    console.log(last(example))
})();