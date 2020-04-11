'use strict';
import {
  page,
  loadMoreReset 
} from './loadMore.js';
import refs from '../index.js';
import {
  showPromo
} from './showPromo.js';
import apiCreator from './apiCreator.js';
import {typeOfFilm} from './switcher.js';


let searchQuery = '';//вывожу эту переменную, чтобы при изменении текста в поле ввода могло корректно действовать событие loadMore


// если функция сработала как колбек(на сабмите формы), то ресетится лоад мор и в кач-ве функции для нее передается filmSearcher
//также сохраняю текст написанный в форме в переменную searchQuery, на случай, если пользователь после функции решит удалить из нее текст(тогда лоад мор будет работать некорректно)
// лоад мор потом подставляет как текст для поиска ту переменную в параметр функции query, а в event - undefined
const filmSearcher = (event, query = refs.film_search_form.firstElementChild.value) => {
  if (event !== undefined) {
    loadMoreReset(filmSearcher);
    event.preventdefault;
  }
  showPromo(apiCreator.search(page, query, typeOfFilm));
  return searchQuery = query;
}

export {filmSearcher, searchQuery};
