'use strict';
import refs from '../index.js';
import apiCreator from './apiCreator.js';
import modal from '../templates/modal.hbs';
import {typeOfFilm} from './switcher.js';
import addToFavorites from './userFavorites.js';
const closeModal = (event)=>{
  if(event.target.className === 'modal_background' || event.target.className === 'modal_cross'){//(.modal_cross - крестик в углу(в дом не добавлял))
    refs.wrapper.removeChild(refs.modal_background);
    refs.body.style.overflow = '';
  }
}

const showModal = (event) => {
  if (event.target.className === 'film_promo_btn') {
    //отрисовка модалки
    fetch(apiCreator.movie(event.target.id, typeOfFilm))
      .then(response => response.json())
      .then(data => {

        const filmData = {
            filmImgLink: apiCreator.image(data.poster_path),
            filmTitle: data.title,
            filmOverview: data.overview,
            filmGenres: data.genres.map(genre => genre.name).join(', '),
            filmVote:data.vote_average,
            genresWord:'Genres:',
        }
        if(data.title === undefined){
          filmData.filmTitle = data.name;
        }
        if(data.poster_path === null){
          filmData.filmImgLink = 'https://seor.ua/media/img/default-image.jpg';
        }
        if(data.genres.length === 0){
          filmData.filmGenres = "";
          filmData.genresWord = '';
        }

        refs.wrapper.insertAdjacentHTML('beforeend', modal(filmData));
        refs.modal_block = document.querySelector('.modal_block');
        refs.body = document.querySelector('body');
        refs.add_to_favorites_btn = document.querySelector('.add_to_favorites_btn');
        //для закрытия
        refs.modal_background = document.querySelector('.modal_background');

        // [...refs.modal_background].forEach(modal => modal.addEventListener('click',closeModal))
        refs.modal_background.addEventListener('click', closeModal);
        //для закрытия
        console.log('event.target.id :', );
        refs.add_to_favorites_btn.addEventListener('click',() => addToFavorites(event.target.id,typeOfFilm));//не мог сделать по другому, уже заэкспортил(дефоулт)
        refs.body.style.overflow = 'hidden';
      }).catch(err => console.log('err :', err));
    //
  }
}

export default showModal;
