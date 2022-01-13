(function () {
    // TODO: Create a function called arrayToString.
    //       The function takes a parameter called myArray.
    //       It returns a string that is the concatenation of all the elements in myArray.
    //       This function is essentially your own version of join.
    //       Therefore, you cannot use join in your function body :slightly_smiling_face:


    const myJoin = function (myArray) {
        let str = '';
        for (let i = 0; i < myArray.length; i++) {
            str += `${myArray[i]}, `;
        }
        return str.slice(0, str.length - 2);
    }

    console.log(myJoin(['Ray', 'Chelsea', 'Clara']));

})();

