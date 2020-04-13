'use strict';

import promo from '../templates/promo.hbs';
import refs from '../index.js';
import apiCreator from './apiCreator.js';
import {
  favoriteMovies,
  favoriteShows
} from './userFavorites';
import {
  typeOfFilm
} from './switcher.js';

// функция показа любимых фильмов(не добавлял кнопку лоад мор)

// сначала скрывает кнопку лоад мор и блок (не найдено)
// затем создает локальную переменную moviesArr в которую, в зависимости от того, на сайте с сериалами или фильмами пользователь, запихивает туда соответствующий массив

// затем происходит проверка на то, есть ли промо на сайте(чтобы потом стереть все промо)
//затем идет проверка на то, есть ли в массиве данные(если нет, то начинает отображаться блок(ничего не найдено) и стопится выполнение функции)

// после происходит forEach для массива moviesArr и через промис с апи (fetch) для каждого айдишника все отрисовывается на странице как в showPromo

//(((пришлось только искать dom сразу в промисе, дальше в функции они не хотят искатся(ничего не находят))))
const showFavorites = (event) => {

  refs.load_more_btn.style.display = 'none';
  refs.not_found_block.style.display = 'none';

  let moviesArr = [];
  if (typeOfFilm === 'movie') {
    moviesArr = favoriteMovies;
  } else if (typeOfFilm === 'tv') {
    moviesArr = favoriteShows;
  }
  //
  if(refs.film_promo.length > 0){
    refs.film_promo.forEach(promo => {
      refs.films_block.removeChild(promo);
    });
  }
  console.log('favoriteMovies :', favoriteMovies);
  console.log('moviesArr :', moviesArr);
  if(moviesArr.length === 0){
      refs.not_found_block.style.display = 'block';
      return;  
  }
  // refs.film_promo = document.querySelectorAll('.film_promo');
  // refs.film_promo_btn = document.querySelectorAll('.film_promo_btn');
  moviesArr.forEach(film => {
    fetch(apiCreator.movie(film, typeOfFilm))
      .then(response => response.json())
      .then(film => {
        const filmData = {
          filmImgLink: apiCreator.image(film.poster_path, true),
          filmVote: film.vote_average,
          filmTitle: film.title,
          filmId: film.id
        };

        if (film.title === undefined) {
          filmData.filmTitle = film.name;
        }
        if (film.poster_path === null) {
          filmData.filmImgLink = 'https://seor.ua/media/img/default-image.jpg';
        }
        refs.films_block.insertAdjacentHTML('afterbegin', promo(filmData));
        // проверка на то, отрисовался ли последний элемент массива, чтобы обратится к dom 
        //P.S перевел film.id в текстовый формат т.к. в массиве это текст
        if(moviesArr[moviesArr.length - 1] === `${film.id}`){
          refs.film_promo = document.querySelectorAll('.film_promo');
          refs.film_promo_btn = document.querySelectorAll('.film_promo_btn');
          console.log('one time hooray');
        }
      }).catch(err => console.log('err '+ err));
  });
  // refs.film_promo = document.querySelectorAll('.film_promo');
  // refs.film_promo_btn = document.querySelectorAll('.film_promo_btn');
  // в конце функции не работает добавление элементов в рефс( как выполнить это только после промиса?)

  // refs.film_promo = document.querySelectorAll('.film_promo');
  // refs.film_promo_btn = document.querySelectorAll('.film_promo_btn');



  // const testMovies = moviesArr.map(film => {
  //   fetch(apiCreator.movie(film, typeOfFilm))
  //     .then(response => response.json())
  //     .then(film => {
  //       const filmData = {
  //         filmImgLink: apiCreator.image(film.poster_path, true),
  //         filmVote: film.vote_average,
  //         filmTitle: film.title,
  //         filmId: film.id
  //       };
  //       if (film.title === undefined) {
  //         filmData.filmTitle = film.name;
  //       }
  //       if (film.poster_path === null) {
  //         filmData.filmImgLink = 'https://seor.ua/media/img/default-image.jpg';
  //       }
  //       refs.films_block.insertAdjacentHTML('afterbegin', promo(filmData));
  //       // refs.film_promo = document.querySelectorAll('.film_promo');
  //       // refs.film_promo_btn = document.querySelectorAll('.film_promo_btn');
  //       return apiCreator.movie(film,typeOfFilm);
  //     }).catch(err => console.log('err '+ err));
  // });
  // Promise.all(testMovies).then(testMovies => {
  //   console.log('testMovies :', testMovies);
  //   refs.film_promo = document.querySelectorAll('.film_promo');
  //   refs.film_promo_btn = document.querySelectorAll('.film_promo_btn');
  // })
}
export default showFavorites;
