(function() {
    'use strict';

// TODO: Declare an array of two objects for movies that have the following member values:
//      title (string)
//      year released (int)
//      rating (string)
//      director (string)
//      imdb rating (decimal)
//      academy award win (boolean)
//      Use imdb.com to look up the info or make up your own info
// TODO: Write a printMovie function that takes a movie as a parameter and prints its info.
//      call it with each of your array elements.
//      write a printMovies function that takes an array as a parameter, iterates over the array, and calls printMovie on each of the array elements (edited)
// TODO: Change the director property of your movies to an object
//     with firstName and lastName properties
//     Make an array property for your movies called genres.
//           It is an array of string elements where each element
//           is one of your movies’ genres from imdb.com
//     and change your printMovie function
// TODO: Add a rate(rating) function to each of your movie objects.
//     The function takes an int parameter called rating
//     Modify rate(rating) to set a myRating property on that object
//     modify printMovie to display myRating for each movie

    const movies = [];

    function addMovie(movieTitle, year, movieRating, directorFirstName, directorLastName, siteRating, award, genre, myRating) {
        let movie = {
            title: movieTitle,
            yearReleased: year,
            rating: movieRating,
            director: {
                firstName: directorFirstName,
                lastName: directorLastName,
            },
            imdbRating: siteRating,
            academyAwardWin: award,
            genre: genre,
            rate: function (rating) {
                this.myRating = rating;
            },
        }
        if(myRating) {
            movie.rate(myRating);
        }
        movies.push(movie);
    }

    function printMovies(movieCollection) {
        movieCollection.forEach(movie => {
            let awardWin = movie.academyAwardWin ? 'Yes' : 'No';
            console.log(`Title: ${movie.title}`);
            console.log(`Year Released: ${movie.yearReleased}`);
            console.log(`Movie Rating: ${movie.rating}`);
            console.log(`Movie Director: ${movie.director.firstName} ${movie.director.lastName}`);
            console.log(`IMBD Rating: ${movie.imdbRating}`);
            console.log(`Academy Award: ${awardWin}`);
            console.log(`Genre(s): ${typeof movie === 'array' ? movie.genre.join(',') : movie.genre}`);
            console.log(`My Rating: ${movie.myRating}`);
            console.log(' -----------------------------------------');
        })
    }


    addMovie('The Shawshank Redemption', 1994, 'R', 'Frank', 'Darabont', 9.3, true, 'drama', 10);
    addMovie('The Outsiders', 1983, 'PG', 'Francis', 'Coppola', 7.1, false, ['crime', 'drama'], 15);


    printMovies(movies);
})();