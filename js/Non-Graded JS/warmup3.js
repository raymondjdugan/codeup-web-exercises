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

    function getSum(a, b) {
        let total = 0;

        // Enter needed code here

        return total;
    }

    console.log(getSum(0, -1)); //Expected -1
    console.log(getSum(2, 2)); //Expected 2
    console.log(getSum(1, 5)); //Expected 15

    if(a > b) {
        b = [a, a = b][0];
    }
    for (let i = a; i <= b ; i++) {
        total += i;
    }
})();

