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

/* Задание на урок:

1) Первую часть задания повторить по уроку

2) Создать функцию showMyDB, которая будет проверять свойство privat. Если стоит в позиции
false - выводит в консоль главный объект программы

3) Создать функцию writeYourGenres в которой пользователь будет 3 раза отвечать на вопрос
"Ваш любимый жанр под номером ${номер по порядку}". Каждый ответ записывается в массив данных
genres

P.S. Функции вызывать не обязательно*/

// Код возьмите из предыдущего домашнего задания

/* Задание на урок:

1) У нас уже есть рабочее приложение, состоящее из отдельных функций. Представьте, что
перед вами стоит задача переписать его так, чтобы все функции стали методами объекта personalMovieDB
Такое случается в реальных продуктах при смене технологий или подхода к архитектуре программы

2) Создать метод toggleVisibleMyDB, который при вызове будет проверять свойство privat. Если оно false - он
переключает его в true, если true - переключает в false. Протестировать вместе с showMyDB.

3) В методе writeYourGenres запретить пользователю нажать кнопку "отмена" или оставлять пустую строку.
Если он это сделал - возвращать его к этому же вопросу. После того, как все жанры введены -
при помощи метода forEach вывести в консоль сообщения в таком виде:
"Любимый жанр #(номер по порядку, начиная с 1) - это (название из массива)"*/

// Код возьмите из предыдущего домашнего задания
"use strict";

const personalMovieDB = {
    'count': 0,
    'movies': {},
    'actors': {},
    'genres': [],
    'privat': false,
    start: function() {
        let numberOfFilms;
        numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?', "");
        while (numberOfFilms == '' || numberOfFilms == null || isNaN(numberOfFilms)) {
            numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?', "");
        };
        personalMovieDB['count'] = numberOfFilms;
    },
    showMyBD: function() {
        if (!personalMovieDB['privat']) {
            console.log(personalMovieDB);
        }
    },
    writeYourGenres: function() {
        for (let i = 0; i < 3; i++) {
            let genre = prompt(`Ваш любимый жанр под номером ${i+1}?`, '');
            if (genre === '' || genre == null) {
                console.log('Некоректные данные');
                i--;
            } else {
                personalMovieDB['genres'][i] = genre;
            }
        };
        personalMovieDB["genres"].forEach(function callback(genre, i) { console.log(`Любимый жанр #${i+1} - это ${personalMovieDB["genres"][i]}`) })
    },
    rememberMyFilms: function() {
        let i = 1,
            lastMovie,
            lastMovieRate,
            isContinued;
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
        };
    },
    detectPersonalLevel: function() {
        if (personalMovieDB['count'] < 10) {
            alert('Просмотрено довольно мало фильмов');
        } else if (personalMovieDB['count'] >= 10 && personalMovieDB['count'] <= 30) {
            alert('Вы классический зритель');
        } else if (personalMovieDB['count'] > 30) {
            alert('Вы киноман!');
        } else {
            alert('Произошла ошибка');
        }
    },
    toggleVisibleMyDb: function () {
        if (personalMovieDB['privat']) {
            personalMovieDB['privat'] = false;
        } else {
            personalMovieDB['privat'] = true;
        }
}

};

// personalMovieDB.start();
// personalMovieDB.rememberMyFilms();
// personalMovieDB.detectPersonalLevel();
// personalMovieDB.showMyBD();
personalMovieDB.writeYourGenres();
personalMovieDB.toggleVisibleMyDb();
personalMovieDB.showMyBD();

console.log(personalMovieDB);
