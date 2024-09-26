// 1. Создать переменную numberOfFilms и получить ответ от пользователя
let numberOfFilms = prompt("Сколько фильмов вы уже посмотрели?");
if (numberOfFilms == null  numberOfFilms.trim() == ""  isNaN(numberOfFilms)  numberOfFilms < 0  numberOfFilms > 10) {
            alert("Неверный ввод!");
            continue; // Если ввод некорректен, возвращаем к запросу

// 2. Создать объект personalMovieDB
const personalMovieDB = {
    count: numberOfFilms,
    movies: {}
};

// 3. Задаем пользователю вопросы дважды
for (let i = 0; i < 2; i++) {
    let lastSeenFilm;
    let lastFilmRatingt;

    do {
        lastSeenFilm = prompt("Один из последних просмотренных фильмов?");
        
        // 4. Проверка корректности названия фильма
        if (lastSeenFilm == null  lastSeenFilm.trim() == ""  lastSeenFilm.length > 50) {
            alert("Неверный ввод! Пожалуйста, введите название фильма (не более 50 символов).");
            continue; // Если ввод некорректен, возвращаем к запросу
        }

        lastFilmRatingt = prompt("На сколько оцените его?");
        
        // Проверка корректности оценки
        if (lastFilmRatingt == null  lastFilmRatingt.trim() == ""  isNaN(lastFilmRatingt)  lastFilmRatingt < 0  lastFilmRatingt > 10) {
            alert("Неверный ввод! Пожалуйста, введите оценку от 0 до 10.");
            continue; // Если ввод некорректен, возвращаем к запросу
        }

        // 5. Записываем ответы в объект movies
        personalMovieDB.movies[lastSeenFilm] = lastFilmRatingt;
        break; // Выход из цикла, если всё прошло успешно
    } while (true);
}

// 6. Выводим объект personalMovieDB в консоль
console.log(personalMovieDB);
