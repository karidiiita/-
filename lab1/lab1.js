 const numberOfFilms = prompt('Сколько фильмов вы уже посмотрели?');

        const personalMovieDB = {
            count: numberOfFilms,
            movies: {}
        };

        for (let i = 0; i < 2; i++) {
            let movieName;
            let movieRating;

            while (true) {
                movieName = prompt('Один из последних просмотренных фильмов?');
                if (movieName === null || movieName.trim() === '' || movieName.length > 50) {
                    alert('Пожалуйста, введите корректное название фильма (не пустое и не длиннее 50 символов).');
                    continue; 
                }
                break;
            }

            while (true) {
                movieRating = prompt('На сколько оцените его?');
                if (movieRating === null || movieRating.trim() === '') {
                    alert('Пожалуйста, введите оценку.');
                    continue;
                }
                break;
            }

            personalMovieDB.movies[movieName] = movieRating;
        }

        console.log(personalMovieDB);
