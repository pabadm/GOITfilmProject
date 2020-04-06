'use strict';
import refs from '../index.js';
import {showPromo} from './showPromo.js';
import {page, loadMoreReset} from './loadMore.js';
import apiCreator from './apiCreator.js';
import {typeOfFilm} from './switcher.js';

//выводит популярные фильмы

const filmPopular = (event) => {
  if (event !== undefined) {
    loadMoreReset(filmPopular);
    refs.film_search_form.firstElementChild.value = '';
  }
  showPromo(apiCreator.popular(page, typeOfFilm));
}
export default filmPopular;
