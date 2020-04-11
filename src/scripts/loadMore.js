'use strict';
import refs from '../index.js';
import filmPopular from './filmPopular.js';
import {
  apiData
} from './showPromo.js';
import {searchQuery} from './filmSearcher.js';


let page = 1; // страница, которая будет отрисовываться через api
let apiFunc = filmPopular; // переменная, в которую закидывается ссылка на функцию, которую должна выполнить кнопка load_more_btn(filmPopular по умолчанию т.к. она выполняется первой)

// лоад мор: плюсует страницу,чтобы получить ту, которую нужно отрисовывать
// если страница будет больше общего кол-ва страниц, или будут ощшибки, то кнопка пропадет(((не работает)))
// далее вызывает функцию, записаную лоад мор ресетом с параметрами(undefined, searchQuery), эти параметры нужны только в случае с функцией filmSearcher, но showPopular они не мешают, поэтому не делал проверку
const loadMore = () => {
  page += 1;
  if (page >= apiData.total_pages || apiData.hasOwnProperty('errors')) {
    refs.load_more_btn.style.display = 'none';
  }
  apiFunc(undefined, searchQuery);// аргументы нужны только filmSearcher, но они не мешают showPopular
  return page;
}


// ресет лоад мора: сначала изменяет page на 1, потом делает видимой кнопку лоад мор, записывает исполняемую функцию в apiFunc(loadMore,filmSearcher) для функции лоад мор
// если в apiData(данные по апи из showPromo) общее кол-во результатов не равно 0 и не имеет ошибок,то удаляет все прошлые промо, которые отображались на сайте
const loadMoreReset = (func) => {
  page = 1;
  refs.load_more_btn.style.display = 'block';
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
