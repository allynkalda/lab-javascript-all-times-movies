/* eslint no-restricted-globals: 'off' */
// Turn duration of the movies from hours to minutes 


// Get the average of all rates with 2 decimals 
function ratesAverage(movies) {
    return movies.reduce( (accumulator, movies) => 
         accumulator + movies.rate, 0) / movies.length;
};

// Get the average of Drama Movies
function dramaMoviesRate(moviesArray) {
    var dramaMovies = [];
    moviesArray.forEach(function(movie){
      if (movie.genre.includes('Drama')){
        dramaMovies.push(movie);
      } else if (dramaMovies === 0){
        return undefined;
      }
    });
    let drama = ratesAverage(dramaMovies);
    return parseFloat(drama.toFixed(2));
  }

// Order by time duration, in growing order

function orderByDuration(movies) {
    movies.sort(function(a, b) {
    return a.duration - b.duration;
  });
  return movies;
};

// How many movies did STEVEN SPIELBERG

function howManyMovies(movies) {
    if (movies.length === 0) {
        return undefined;
    }
    let filtered = movies.filter(elem => (elem.genre.includes("Drama")) && (elem.director === "Steven Spielberg"))
    return "Steven Spielberg directed " + filtered.length + " drama movies!";
}




// Order by title and print the first 20 titles


// Best yearly rate average
/*

= (arr) => {
    if (arr.length === 0) return undefined
    let filterArr = arr.filter(movie => (movie.genre.includes('Drama')) && (movie.director === 'Steven Spielberg'))
    return `Steven Spielberg directed ${filterArr.length} drama movies!`
  }

function howManyMovies(movies) {
    let stevenFilm = movies.filter( function (element) {
        if (element.director == "Steven Spielberg")
        return true;
    });
    let dramaFilm = stevenFilm.filter( function (element) {
        if (element.genre == "drama")
        return true;
    })
    return dramaFilm;
}
*/