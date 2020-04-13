'use strict';
// import svg from './img/svg';
// console.log('svg :', svg);
import './styles.css';

//через прочерк я отмечаю теги, которые добавляются через функции
const refs = {
  films_block: document.querySelector('#films_block'),
  film_search_form: document.querySelector('#film_search_form'),
  home_btn: document.querySelector('#home_btn'),
  not_found_block: document.querySelector('.not_found_block'),
  wrapper: document.querySelector('#wrapper'),
  // film_promo_btn:('.film_promo_btn'),//(добавляется через showPromo)
  // film_promo('.film_promo'), (добавляется через showPromo)
  //modal_block('.modal_block) (добавляется через showModal)
  //modal_cross('.modal_cross)
  //body
  load_more_btn: document.querySelector('#load_more'),
  theme_toggle_btn: document.querySelector('#theme_toggle_btn'),
  switch_btn: document.querySelector('#switch_btn'), //переключалка между сериалами и фильмами
  show_favorites_btn: document.querySelector('#show_favorites_btn'),
  body: document.querySelector('body'),
};

// в индекс.js просто дал всем кнопкам колбек функции и по умолчанию запускаю отрисовку популярных фильмов, ну и объявил рефсы

export default refs;

import {
  filmSearcher
} from './scripts/filmSearcher.js';

import filmPopular from './scripts/filmPopular.js';

import showModal from './scripts/showModal.js';

import {
  loadMore
} from './scripts/loadMore.js';

import {
  switcher
} from './scripts/switcher.js';

import showFavorites from './scripts/showFavorites.js';

import {
  addBackToTop
} from 'vanilla-back-to-top';


// showFavorites()
// import {themeToggler, themeDefault} from './scripts/themeToggler.js';
//начальный запуск показа фильмов
filmPopular();
//

//ивент для формы
refs.film_search_form.addEventListener('submit', filmSearcher);
//

//ивент для показа модалки
refs.films_block.addEventListener('click', showModal);
//

//ивент для кнопки load more
refs.load_more_btn.addEventListener('click', loadMore);

//ивент для кнопки home
refs.home_btn.addEventListener('click', filmPopular);

//ивент для кнопки (theme_toggle_btn)

refs.show_favorites_btn.addEventListener('click', showFavorites);

//ивент для переключалки 
refs.switch_btn.addEventListener('click', switcher);

addBackToTop({
  diameter: 100,
  backgroundColor: 'rgb(255, 82, 82)',
  textColor: '#fff',
  scrollDuration: 500,
});


// const scrollFunc = (event) =>{
//   console.log('event :', pageYOffset + window.innerHeight);
//   console.log('refs.wrapper.offsetHeight :', refs.body.offsetHeight);
//   console.log('window.innerHeight :', window.innerHeight);
// console.log('pageYOffset - refs.wrapper.offsetHeight :',refs.wrapper.offsetHeight - pageYOffset);
// if(pageYOffset === '80%'){
//   console.log('yesss!!! :', );
// }
// // console.log('event.target :', event.target);
// refs.load_more_btn = pageYOffset + 'px';
// console.log('refs.load_more_btn :', refs.load_more_btn);
// }

// console.log('_.debounce :', windowdebounce);
// window.addEventListener('scroll',debounce(loadMore,50));

//экспорты



// themeToggler();
// themeDefault();
// localStorage.setItem('theme','light');
// if(localStorage.getItem('theme') === 'light'){
//   localStorage.setItem('theme','dark');
// }else{
//   localStorage.setItem('theme','light');
// }
