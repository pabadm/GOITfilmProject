'use strict';
import refs from '../index.js';
import apiCreator from './apiCreator.js';
import modal from '../templates/modal.hbs';

const closeModal = (event)=>{
  if(event.target.className === 'modal_background' || event.target.className === 'modal_cross'){//(.modal_cross - крестик в углу(в дом не добавлял))
    refs.wrapper.removeChild(refs.modal_background);
    refs.body.style.overflow = '';
  }
}

const showModal = (event) => {
  if (event.target.className === 'film_promo_btn') {
    //отрисовка модалки
    fetch(apiCreator.movie(event.target.id))
      .then(response => response.json())
      .then(data => {
        const filmData = {
            filmImgLink: apiCreator.image(data.poster_path),
            filmTitle: data.title,
            filmOverview: data.overview,
            filmGenres: data.genres[0].name,
            filmVote:data.vote_average,
        }
        if(data.poster_path === null){
          console.log('filmData.filmImgLink :',data.poster_path);
          filmData.filmImgLink = 'https://seor.ua/media/img/default-image.jpg';
        }
        refs.wrapper.insertAdjacentHTML('beforeend', modal(filmData));
        refs.modal_block = document.querySelector('.modal_block');
        refs.body = document.querySelector('body');

        //для закрытия
        refs.modal_background = document.querySelector('.modal_background');

        // [...refs.modal_background].forEach(modal => modal.addEventListener('click',closeModal))
        refs.modal_background.addEventListener('click', closeModal);
        //для закрытия

        refs.body.style.overflow = 'hidden';
      }).catch(err => console.log('err :', err));
    //
  }
}

export default showModal;
