'use strict';
import refs from '../index.js';
import {showPromo} from './showPromo.js';
import {page, loadMoreReset} from './loadMore.js';
import apiCreator from './apiCreator.js';
import {typeOfFilm} from './switcher.js';

//выводит популярные фильмы
// если функция сработала как коллбек(на кнопке home), то ресетится кнопка лоад мор и в кач-ве функции для нее передается filmPopular (также удаляется текст в форме)
//потом  активируется функция showPromo с параметром(api) apicreator в который передается страница из лоад мора и тип фильма из свитчера(переключалка между фильмами и сериалами)
const filmPopular = (event) => {
  if (event !== undefined) {
    loadMoreReset(filmPopular);
    refs.film_search_form.firstElementChild.value = '';
  }
  showPromo(apiCreator.popular(page, typeOfFilm));
}
export default filmPopular;
