(function(){
    "use strict";

    let planetsString = "Mercury|Venus|Earth|Mars|Jupiter|Saturn|Uranus|Neptune";
    let planetsArray;

    /**
     * TODO:
     * Convert planetsString to an array, and save it in a variable named
     * planetsArray.
     * console.log planetsArray to check your work
     */
    planetsArray = planetsString.split('|')
    // console.log(planetsArray);

    /**
     * TODO:
     * Create a string with <br> tags between each planet. console.log() your
     * results. Why might this be useful?
     *
     * BONUS:
     * Create another string that would display your planets in an undordered
     * list. You will need an opening AND closing <ul> tags around the entire
     * string, and <li> tags around each planet.
     */
    // let brString = planetsArray.join('<br>');
    // console.log(brString);


    function addList(array){
        let li = '';
        for (let i = 0; i < array.length; i++) {
            li += `<li>${array[i]}</li>`
        }
        return `<ul>${li}</ul>`
    }

    // function addList2(array){
    //     let newPlanets = array.slice()
    //     for (let i = 0; i < newPlanets.length; i++) {
    //         newPlanets.slice(i,0, '<li>')
    //     }
    //     return newPlanets;
    // }

    // console.log(addList2(planetsArray))
    console.log(addList(planetsArray));
})();