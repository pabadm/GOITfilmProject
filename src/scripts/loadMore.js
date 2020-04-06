'use strict';
import refs from '../index.js';
import filmPopular from './filmPopular.js';
import {
  apiData
} from './showPromo.js';
import {searchQuery} from './filmSearcher.js';


// в файле 3 функции((((((()))))))
// loadMore - callback для load_more_btn
//loadMoreReset - ресетит настройки, если отправлена форма или нажата кнопка home_btn(page становится 1 ) и передает функцию, которая будет выполнятся в loadMore (apFunc)
//(((((())))))



let page = 1; // страница, которая будет отрисовываться через api
let apiFunc = filmPopular; // переменная, в которую закидывается ссылка на функцию, которую должна выполнить кнопка load_more_btn(filmPopular по умолчанию т.к. она выполняется первой)


const loadMore = () => {
  page += 1;
  if (page >= apiData.total_pages || apiData.hasOwnProperty('errors')) {
    refs.load_more_btn.style.display = 'none';
  }
  console.log('page :', page);
  apiFunc(undefined, searchQuery);// аргументы нужны только filmSearcher, но они не мешают showPopular
  return page;
}



const loadMoreReset = (func) => {
  page = 1;
  refs.load_more_btn.style.display = 'block';
  event.preventdefault;
  apiFunc = func;
  //проверка на то, есть ли теги с фильмами в dom
  if (apiData.total_results !== 0 && !apiData.hasOwnProperty('errors')) {
    refs.film_promo.forEach(promo => {
      refs.films_block.removeChild(promo);
    });
  }
  //
}


export {
  loadMore,
  page,
  loadMoreReset
};
