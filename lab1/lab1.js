let numberOfFilms = prompt("Сколько фильмов вы уже посмотрели?");
console.log("Вы посмотрели ", numberOfFilms, " фильмов.");

const personalMovieDB = {
    count: numberOfFilms,
    movies: {},
};

do {
    let lastSeenFilm = prompt("Какой фильм посмотрели последним?");
    
    // Проверка корректности названия фильма
    if (lastSeenFilm === null  lastSeenFilm.trim() === ""  lastSeenFilm.length > 50) {
        alert("Неверный ввод! Пожалуйста, введите корректное название фильма (не более 50 символов).");
        continue; // Вернуться к запросу
    }

    let lastFilmRatingt = prompt("На сколько оцените его?");
    
    // Здесь можно добавить проверку для рейтинга, если это необходимо
    personalMovieDB.movies[lastSeenFilm] = lastFilmRatingt;
    break; // Выйти из цикла после корректного ввода
} while (true);

console.log(personalMovieDB);
