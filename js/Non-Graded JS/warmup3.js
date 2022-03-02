(function () {
    // // TODO: Create a function called arrayToString.
    // //       The function takes a parameter called myArray.
    // //       It returns a string that is the concatenation of all the elements in myArray.
    // //       This function is essentially your own version of join.
    // //       Therefore, you cannot use join in your function body :slightly_smiling_face:
    //
    //
    // const myJoin = function (myArray, delim) {
    //     let str = '';
    //     for (let i = 0; i < myArray.length; i++) {
    //         str += `${myArray[i]}${delim}`;
    //     }
    //     return str.slice(0, str.length - 1);
    // }
    //
    // console.log(myJoin(['Ray', 'Chelsea', 'Clara'], ","));


    // let bugs = ["mosquito", "ant", "scorpion", "ant", "ant", "mosquito", "typo", "reference error", "type error"];
    // const removeAll = function(myArray, valueToRemove) {
    //     // return myArray.filter(el => valueToRemove !== el);
    //     return myArray.filter(function (el) {
    //         return valueToRemove !== el;
    //     })
    // }
    // console.log(removeAll(bugs, 'ant'));
    // const removeAll = function (array, value){
    //     const arraySet = new Set(array);
    //     console.log(arraySet)
    //     arraySet.delete(value);
    //     return Array.from(arraySet);
    // }
    // console.log(removeAll(bugs, 'ant'));

    // function getCount(str) {
    //     let vowelsCount = 0;
    //     const vowelsArray = ['a', 'A', 'e', 'E', 'i', 'I', 'o', 'O', 'u', 'U'];
    //     for (let i = 0; i < str.length; i++) {
    //         if(vowelsArray.includes(str[i])){
    //             vowelsCount++;
    //         }
    //     }
    //     return vowelsCount;
    // }

    // function getCount(str) {
    //     return str.split('').filter(c => "aeiouAEIOU".includes(c)).length;
    // }
    // console.log(getCount('Hello World'));

    // function scoreTest(str, right, omit, wrong){
    //     let correctAnswer = str.filter(num => '0'.includes(num)).length;
    //     let omittedAnswer = str.filter(num => '1'.includes(num)).length;
    //     let incorrectAnswer = str.filter(num => '2'.includes(num)).length;
    //
    //     return (correctAnswer * right) + (omittedAnswer * omit) - (incorrectAnswer * wrong)
    // }
    //
    // console.log(scoreTest([0, 0, 0, 0, 2, 1, 0], 2, 0, 1));
    // console.log(scoreTest([0, 1, 0, 0, 2, 1, 0, 2, 2, 1], 3, -1, 2));

    // function DNAStrand(dna){
    //     return dna.split("").map(strand => {
    //         switch(strand) {
    //             case "A":
    //                 return "T"
    //             case "T":
    //                 return "A"
    //             case "C":
    //                 return "G"
    //             case "G":
    //                 return "C"
    //         }
    //     }).join('')
    // }
    //
    // console.log(DNAStrand('AAAA'));
    // console.log(DNAStrand('ATTGC'));

    // function getSum(a, b) {
    //     let total = 0;
    //
    //     // Enter needed code here
    //
    //     return total;
    // }
    //
    // console.log(getSum(0, -1)); //Expected -1
    // console.log(getSum(2, 2)); //Expected 2
    // console.log(getSum(1, 5)); //Expected 15
    //
    // if(a > b) {
    //     b = [a, a = b][0];
    // }
    // for (let i = a; i <= b ; i++) {
    //     total += i;
    // }

    // function duplicateEncode(word) {
    //     let finalString = '';
    //     let wordCount = [...word].reduce((a, e) => { a[e] = a[e] ? a[e] + 1 : 1; return a }, {});
    //     for (let char in word) {
    //         for (let [key, value] of Object.entries(wordCount)) {
    //             if(char === key && value > 1) {
    //                 finalString += ')';
    //             } else {
    //                 finalString += '(';
    //             }
    //         }
    //     }
    //     return finalString;
    // }
    //
    // console.log(duplicateEncode('recede'));

    // let myCats = [
    //     {
    //         catName: "Fifi",
    //         age: 5
    //     },
    //     {
    //         catName: "Fluffy",
    //         age: 3
    //     },
    //     {
    //         catName: "Abby",
    //         age: 7
    //     }
    // ];
    //
    // function getNthCat(someArray, indexToGet) {
    //     return someArray[indexToGet];
    // }
    // // print out the cat at index 1
    // console.log(getNthCat(myCats, 1));
    // console.log(getNthCat(myCats, 0));
    // console.log(getNthCat(myCats, myCats.length-1));

    // TODO: Write a function called reverseString that takes in a string
    //  And returns a string that has the characters of the original string in reverse order.
    //     example: reverseString('hello') - returns 'olleh'

    // const reverseString = function(phrase) {
    //     return phrase.split('').reverse().join('');
    // }

    // const reverseStringLoop = function (phrase) {
    //     let reverseString = '';
    //     for (let i = phrase.length - 1; i > 0; i--) {
    //         reverseString += phrase[i];
    //     }
    //     return reverseString;
    // }

    // console.log(reverseString('hello'));
    // console.log(reverseString('never odd or even'));

    // function findAverage(arrayOfNums) {
    //     return arrayOfNums.reduce((a, b) => (a + b)) / arrayOfNums.length;
    // }
    //
    // console.log(findAverage([95, 74, 86, 100]));

    // function sumOfSquares(num1, num2) {
    //     return Math.pow(num1, 2) + Math.pow(num2, 2)
    // }
    // console.log(sumOfSquares(2, 3));

    // function whichStringIsLonger(string1, string2){
    //     if (typeof string1 === 'string' && typeof string2 === "string"){
    //         if (string1.length === string2.length) {
    //             return 'neither'
    //         } else {
    //             return string1.length > string2.length ? 'first' : 'second'
    //         }
    //
    //     } else {
    //         return false
    //     }
    // }
    //
    // console.log(whichStringIsLonger("bobby", "lou")); // returns first
    // console.log(whichStringIsLonger("bob", "louise")); // returns second
    // console.log(whichStringIsLonger("bob", "lou")); // returns neither
    // console.log(whichStringIsLonger("bobby", 2)); // returns false
    // console.log(whichStringIsLonger(1, "lou")); // returns false

    // Write a function called convertLowHighToObject that takes in a string  that represents the low and high temperature in this format '35, 42' (assuming low will always be the left value and high the right) and returns an object with the properties 'low' and 'high' with the values of those respective properties set to the corresponding values in the input string.
    //     NOTE: the values in the object should be of the number type
    // Example input: '35, 42'
    // Example return: {low: 35, high: 42}

    // const convertLowHighToObject = function (low, high){
    //     if (parseFloat(low) && parseFloat(high)){
    //         return `Low Temperature: ${low}\nHigh Temperature: ${high}`
    //     } else {
    //         return `Please enter numeric values for evaluation`
    //     }
    // }
    // console.log(convertLowHighToObject(35, 42))
    // console.log(convertLowHighToObject('hi'))

    // Write a function called countDuplicates that takes in a string and returns an object that contains the count for each letter within the given string.
    //     ex: countDuplicates("adsjfdsfsfjsdjfhacabcsbajda")
    // returns { a: 5, d: 4, s: 5, j: 4, f: 4, h: 1, c: 2, b: 2 }

    const countDuplicates = function (string){
        return string.split('').reduce((total, letter) => {
            total[letter] ? total[letter]++ : total[letter] = 1;
            return total
        }, {})
    }
    console.log(countDuplicates("adsjfdsfsfjsdjfhacabcsbajda"))
})();

