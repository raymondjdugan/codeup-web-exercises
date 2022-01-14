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


    let bugs = ["mosquito", "ant", "scorpion", "ant", "ant", "mosquito", "typo", "reference error", "type error"];
    // const removeAll = function(myArray, valueToRemove) {
    //     // return myArray.filter(el => valueToRemove !== el);
    //     return myArray.filter(function (el) {
    //         return valueToRemove !== el;
    //     })
    // }
    // console.log(removeAll(bugs, 'ant'));
    const removeAll = function (array, value){
        const arraySet = new Set(array);
        console.log(arraySet)
        arraySet.delete(value);
        return Array.from(arraySet);
    }
    console.log(removeAll(bugs, 'ant'));
})();

