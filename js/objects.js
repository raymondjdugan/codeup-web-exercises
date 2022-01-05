(function () {
    "use strict";

    /**
     * TODO:
     * Create an object with firstName and lastName properties that are strings
     * with your first and last name. Store this object in a variable named
     * `person`.
     *
     * Example:
     *  > console.log(person.firstName) // "Rick"
     *  > console.log(person.lastName) // "Sanchez"
     */
    const person = {
        firstName: 'Raymond',
        lastName: 'Dugan',
        sayHello(firstName, lastName) {
            return `Hello, ${this.firstName} ${this.lastName}.`
        },
    }

    console.log(person.firstName);
    console.log(person.lastName);
    console.log('--------------------------')
    /**
     * TODO:
     * Add a sayHello method to the person object that returns a greeting using
     * the firstName and lastName properties.
     * console.log the returned message to check your work
     *
     * Example
     * > console.log(person.sayHello()) // "Hello from Rick Sanchez!"
     */
    console.log(person.sayHello())
    console.log('--------------------------')
    /** TODO:
     * HEB has an offer for the shoppers that buy products amounting to
     * more than $200. If a shopper spends more than $200, they get a 12%
     * discount. Write a JS program, using conditionals, that logs to the
     * browser, how much Ryan, Cameron and George need to pay. We know that
     * Cameron bought $180, Ryan $250 and George $320. Your program will have to
     * display a line with the name of the person, the amount before the
     * discount, the discount, if any, and the amount after the discount.
     *
     * Uncomment the lines below to create an array of objects where each object
     * represents one shopper. Use a foreach loop to iterate through the array,
     * and console.log the relevant messages for each person
     */

    var shoppers = [
        {name: 'Cameron', amount: 180},
        {name: 'Ryan', amount: 250},
        {name: 'George', amount: 320}
    ];
    shoppers.forEach(shopper => {
        const qualify = shopper.amount > 200 ? 'qualifies for 12% discount' : 'does not qualify for a discount';
        console.log(
            `${shopper.name} spent $${shopper.amount} which ${qualify}. ${shopper.name}'s total is $${qualify === true ?
                                                                                                      shopper.amount -
                                                                                                          (shopper.amount *
                                                                                                              .12) :
                                                                                                      shopper.amount}.`)
    })
    console.log('--------------------------')
    /** TODO:
     * Create an array of objects that represent books and store it in a
     * variable named `books`. Each object should have a title and an author
     * property. The author property should be an object with properties
     * `firstName` and `lastName`. Be creative and add at least 5 books to the
     * array
     *
     * Example:
     * > console.log(books[0].title) // "The Salmon of Doubt"
     * > console.log(books[0].author.firstName) // "Douglas"
     * > console.log(books[0].author.lastName) // "Adams"
     */
    const books = [
        {
            title: 'Harry Potter and the Deathly Hallows',
            author: {
                firstName: 'Jo',
                lastName: 'Rowling',
            },
        },
        {
            title: 'Furies of Calderon',
            author: {
                firstName: 'Jim',
                lastName: 'Butcher',
            },
        },
        {
            title: 'Fool Moon',
            author: {
                firstName: 'Jim',
                lastName: 'Butcher',
            },
        },
        {
            title: 'Ghost Story',
            author: {
                firstName: 'Jim',
                lastName: 'Butcher',
            },
        },
        {
            title: 'Harry Potter and the Order of the Phoenix',
            author: {
                firstName: 'Jo',
                lastName: 'Rowling',
            },
        },
    ];
    /**
     * TODO:
     * Loop through the books array and output the following information about
     * each book:
     * - the book number (use the index of the book in the array)
     * - the book title
     * - author's full name (first name + last name)
     *
     * Example Console Output:
     *
     *      Book # 1
     *      Title: The Salmon of Doubt
     *      Author: Douglas Adams
     *      ---
     *      Book # 2
     *      Title: Walkaway
     *      Author: Cory Doctorow
     *      ---
     *      Book # 3
     *      Title: A Brief History of Time
     *      Author: Stephen Hawking
     *      ---
     *      ...
     */
    books.forEach((book, i) => console.log(
        `Book #${i + 1}\nTitle: ${book.title}\nAuthor: ${book.author.firstName} ${book.author.lastName}\n---`))
    /**
     * Bonus:
     * - Create a function named `createBook` that accepts a title and author
     *   name and returns a book object with the properties described
     *   previously.
     *   Refactor your code that creates the books array to instead
     *   use your function.
     * - Create a function named `showBookInfo` that accepts a book object and
     *   outputs the information described above. Refactor your loop to use your
     *   `showBookInfo` function.
     */
    const books2 = [];
    const createBook = function (bookTitle, bookAuthor) {

        const [authorFirstName, authorLastName] = bookAuthor.split(' ');
        let book = {
            title: bookTitle,
            author: {
                firstName: authorFirstName,
                lastName: authorLastName,
            }
        }
        books2.push(book);
    }

    const favBooks = function () {
        createBook('Harry Potter and the Deathly Hallows', 'Jo Rowling')
        createBook('Furies of Calderon', 'Jim Butcher')
        createBook('Fool Moon', 'Jim Butcher')
        createBook('Ghost Story', 'Jim Butcher')
        createBook('Harry Potter and the Order of the Phoenix', 'Jo Rowling')
    }
    favBooks();

    const showBookInfo = function (bookArray) {
        bookArray.forEach((book, i) => console.log(
            `Book #${i + 1}\nTitle: ${book.title}\nAuthor: ${book.author.firstName} ${book.author.lastName}\n---`))
    }
    showBookInfo(books2);

})();