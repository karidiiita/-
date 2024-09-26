let numberOfFilms = prompt("Сколько фильмов вы уже посмотрели?"); 
console.log("Вы посмотрели ", numberOfFilms, " фильмов.");

const personalMovieDB = {
    count : numberOfFilms, 
    movies : {

    },
};

do{
    let lastSeenFilm = prompt("Какой фильм посмотрели последним?");
    let lastFilmRatingt = prompt("На сколько оцените его?");
    if(lastSeenFilm == null || lastSeenFilm.length>50 || lastSeenFilm == ""){ 
        alert("Wrong enter!");
        continue;
    }
    personalMovieDB.movies[lastSeenFilm] = lastFilmRatingt;
    break; 
}while(true);

console.log(personalMovieDB)