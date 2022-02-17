(function(){
    const users = [
        {
            id: 1,
            name: 'ryan',
            email: 'ryan@codeup.com',
            languages: ['clojure', 'javascript'],
            yearsOfExperience: 5
        },
        {
            id: 2,
            name: 'luis',
            email: 'luis@codeup.com',
            languages: ['java', 'scala', 'php'],
            yearsOfExperience: 6
        },
        {
            id: 3,
            name: 'zach',
            email: 'zach@codeup.com',
            languages: ['javascript', 'bash'],
            yearsOfExperience: 7
        },
        {
            id: 4,
            name: 'fernando',
            email: 'fernando@codeup.com',
            languages: ['java', 'php', 'sql'],
            yearsOfExperience: 8
        },
        {
            id: 5,
            name: 'justin',
            email: 'justin@codeup.com',
            languages: ['html', 'css', 'javascript', 'php'],
            yearsOfExperience: 9
        }
    ];


    // TODO: Use .filter to create an array of user objects where each user object has at least 3 languages in the languages array.
    const threeOrMoreLanguages = users.filter(user => user.languages.length > 2)
    console.log(threeOrMoreLanguages);

    // TODO: Use .map to create an array of strings where each element is a user's email address
    const emails = users.map(user => user.email)
    console.log(emails);

    // TODO: Use .reduce to get the total years of experience from the list of users. Once you get the total of years you can use the result to calculate the average.
    const averageYearsOfExperience = users.reduce((a, b ) => (a + b.yearsOfExperience), 0) / users.length
    console.log(averageYearsOfExperience)
    // TODO: Use .reduce to get the longest email from the list of users.
    let longestEmail = emails.reduce((prev, current) => prev.length > current.length ? prev : current)
    console.log(`Longest Email: ${longestEmail}`);

    // TODO: Use .reduce to get the list of user's names in a single string. Example: Your instructors are: ryan, luis, zach, fernando, justin.
    let res = users.reduce((prev, curr, i) => (i === 0 ? prev +=`The instructors are: ${curr.name}` : prev += `, ${curr.name}`), "");
    console.log(res);

    // TODO: Bonus: Use .reduce to get the unique list of languages from the list of users.
    let uniqueLanguages1 = users.map(user => user.languages) // Creates nested array of languages
        .reduce((pre, cur) => pre.concat(cur)) // Combines array
        .reduce((unique, item) => unique.includes(item) ? unique : [...unique, item], []) //Check for uniqueness
    console.log(uniqueLanguages1);

    let uniqueEasy = Array.from(new Set(users.map(user => user.languages)
        .reduce((pre, cur) => pre.concat(cur))))
    console.log(uniqueEasy);
}())
