/* Задание на урок:

1) Создать переменную numberOfFilms и в неё поместить ответ от пользователя на вопрос:
'Сколько фильмов вы уже посмотрели?'

2) Создать объект personalMovieDB и в него поместить такие свойства:
    - count - сюда передается ответ на первый вопрос
    - movies - в это свойство поместить пустой объект
    - actors - тоже поместить пустой объект
    - genres - сюда поместить пустой массив
    - privat - в это свойство поместить boolean(логическое) значение false

3) Задайте пользователю по два раза вопросы:
    - 'Один из последних просмотренных фильмов?'
    - 'На сколько оцените его?'
Ответы стоит поместить в отдельные переменные
Записать ответы в объект movies в формате:
    movies: {
        'logan': '8.1'
    }

Проверить, чтобы все работало без ошибок в консоли */

/* Задание на урок:

1) Автоматизировать вопросы пользователю про фильмы при помощи цикла

2) Сделать так, чтобы пользователь не мог оставить ответ в виде пустой строки,
отменить ответ или ввести название фильма длинее, чем 50 символов. Если это происходит -
возвращаем пользователя к вопросам опять. (К любой строке можно обратиться как
str.length - и получить её длину)

3) При помощи условий проверить  personalMovieDB.count, и если он меньше 10 - вывести сообщение
"Просмотрено довольно мало фильмов", если от 10 до 30 - "Вы классический зритель", а если больше -
"Вы киноман". А если не подошло ни к одному варианту - "Произошла ошибка"

4) Потренироваться и переписать цикл еще двумя способами*/

"use strict";

const numberOfFilms = prompt('Сколько фильмов вы уже посмотрели?', ""),
    personalMovieDB = {
        'count': +numberOfFilms,
        'movies': {},
        'actors': {},
        'genres': [],
        'privat': false
    };

let i = 1,
    lastMovie,
    lastMovieRate,
    isContinued;

// while (i <= 2) {
//     lastMovie = prompt('Один из последних просмотренных фильмов?', "");
//     lastMovieRate = prompt('На сколько оцените его?', "");
//
//     if (lastMovie == '' || lastMovieRate == '' || lastMovie == null || lastMovieRate == null || lastMovie.length > 50) {
//         isContinued = confirm('Введенные данные неверны!');
//         if (isContinued) {
//             continue;
//         } else {
//             break;
//         }
//     } else {
//         personalMovieDB['movies'][lastMovie] = lastMovieRate;
//         i++;
//     };
// }

// do {
//     lastMovie = prompt('Один из последних просмотренных фильмов?', "");
//     lastMovieRate = prompt('На сколько оцените его?', "");
//
//     if (lastMovie == '' || lastMovieRate == '' || lastMovie == null || lastMovieRate == null || lastMovie.length > 50) {
//         isContinued = confirm('Введенные данные неверны!');
//         if (isContinued) {
//             continue;
//         } else {
//             break;
//         }
//     } else {
//         personalMovieDB['movies'][lastMovie] = lastMovieRate;
//         i++;
//     };
// }
// while (i < 3);

for (let i = 1; i < 3; i++) {
    lastMovie = prompt('Один из последних просмотренных фильмов?', "");
    lastMovieRate = prompt('На сколько оцените его?', "");

    if (lastMovie == '' || lastMovieRate == '' || lastMovie == null || lastMovieRate == null || lastMovie.length > 50) {
        console.log('ошибка');
        isContinued = confirm('Введенные данные неверны!');
        if (isContinued) {
            i--;
            continue;
        } else {
            break;
        }
    } else {
        console.log('успешно');
        personalMovieDB['movies'][lastMovie] = lastMovieRate;
    };
}

if (personalMovieDB['count'] < 10) {
    alert('Просмотрено довольно мало фильмов');
} else if (personalMovieDB['count'] >= 10 && personalMovieDB['count'] <= 30) {
    alert('Вы классический зритель');
} else if (personalMovieDB['count'] > 30) {
    alert('Вы киноман!');
} else {
    alert('Произошла ошибка');
}

console.log(personalMovieDB);
