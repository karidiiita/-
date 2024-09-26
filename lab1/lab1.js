let numberOfFilms = prompt("Сколько фильмов вы уже посмотрели?"); 
console.log("Вы посмотрели ", numberOfFilms, " фильмов.");

const personalMovieDB = {
    count : numberOfFilms, 
    movies : {

    },
};

for(let i = 0; i < 2; i++)
{
    let lastMovie = prompt('Один из последних просмотренных фильмов?');
    let movieRating = prompt('На сколько оцените его?');


  
  if(lastMovie != null && movieRating != null 
    && lastMovie != '' && movieRating != '' 
    && lastMovie.length < 50 )
    {
        personalMovieDB.movies[lastMovie] = movieRating;
    }
     else
    {
        i--
    }
}


console.log(personalMovieDB)
