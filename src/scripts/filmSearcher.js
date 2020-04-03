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


let searchQuery = '';//вывожу эту переменную, чтобы при изменении текста в поле ввода могло корректно действовать событие loadMore

const filmSearcher = (event, query = refs.film_search_form.firstElementChild.value) => {// query также может передавться из loadMore()
  if (event !== undefined) {//функция используется не только как callback`
    loadMoreReset(filmSearcher);
  }
  showPromo(apiCreator.search(page, query));
  return searchQuery = query;//для loadMore
}

export {filmSearcher, searchQuery};
