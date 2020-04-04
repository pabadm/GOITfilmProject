'use strict';
//отрисовка всех элементов
import promo from '../templates/promo.hbs';
// import notFound from '../templates/notFound.hbs';
import refs from '../index.js';
import apiCreator from './apiCreator.js';
let apiData = {}; //объект со всеми данными по api(изменяется через showPromo())


//промо фильма(вывод блока фильма)

const showPromo = (api) => {
  fetch(api)
    .then(response => response.json())
    .then(data => {
      apiData = data;
      if (data.total_pages === 0 || data.hasOwnProperty('errors')) {
        return undefined; // для вывода сообщения('ничего не найдено')
      }

      return data.results;
    })
    .then(results => {
      //удаление сообщения notFound при новом поиске
      if(refs.not_found_block.style.display === 'block'){
        refs.not_found_block.style.display = 'none';
      }
      //
      //вывод сообщения notFound
      if (results === undefined) {
        refs.not_found_block.style.display = 'block';
        refs.load_more_btn.style.display = 'none';
        return null;//чтобы catch не жаловалось
      } //вывод сообщения notFound
      results.forEach(film => {
        //вставка тегов с фильмами

        const filmData = {
          filmImgLink: apiCreator.image(film.poster_path, true),
          filmVote: film.vote_average,
          filmTitle: film.title,
          filmId: film.id
        };
        if(film.poster_path === null){
          console.log('filmData.filmImgLink :',film.poster_path);
          filmData.filmImgLink = 'https://seor.ua/media/img/default-image.jpg';
        }
        refs.films_block.insertAdjacentHTML('beforeend', promo(filmData));
        refs.film_promo = document.querySelectorAll('.film_promo');
        refs.film_promo_btn = document.querySelectorAll('.film_promo_btn');
      })
    }).catch(err => console.log('err ' + err));
}
//промо фильма

export {
  apiData,
  showPromo
};
