'use strict';
import './styles.css';
//через прочерк я отмечаю теги
const refs = {
  films_block: document.querySelector('#films_block'),
  film_search_form: document.querySelector('#film_search_form'),
  home_btn: document.querySelector('#home_btn'),
  not_found_block:document.querySelector('.not_found_block'),
  wrapper:document.querySelector('#wrapper'),
  // film_promo_btn:('.film_promo_btn'),//(добавляется через showPromo)
  // film_promo('.film_promo'), (добавляется через showPromo)
  //modal_block('.modal_block) (добавляется через showModal)
  //modal_cross('.modal_cross)
  //body
  load_more_btn: document.querySelector('#load_more'),
  theme_toggle_btn: document.querySelector('#theme_toggle_btn'),
};


import {filmSearcher} from './scripts/filmSearcher.js';
import preloader from './scripts/preloader.js';

import showModal from './scripts/showModal.js';

import {loadMore} from './scripts/loadMore.js';

//начальный запуск показа фильмов
preloader();
//

//ивент для формы
refs.film_search_form.addEventListener('submit', filmSearcher);
//

//ивент для показа модалки
refs.films_block.addEventListener('click',showModal);
//

//ивент для кнопки load more
refs.load_more_btn.addEventListener('click', loadMore);

//ивент для кнопки home
refs.home_btn.addEventListener('click', preloader);

//экспорты
export default refs;