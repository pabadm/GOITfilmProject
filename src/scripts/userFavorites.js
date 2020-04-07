'use strict';

import refs from '../index.js'

//let - что-бы локал сторедж мог их заменять
let favoriteMovies = [];
let favoriteShows = [];

if (localStorage.getItem('favoriteMovies') !== null) {
  favoriteMovies = localStorage.getItem("favoriteMovies").split(',');
};
if (localStorage.getItem('favoriteShows') !== null) {
  favoriteMovies = localStorage.getItem("favoriteShows").split(',');
}
console.log('favoriteMovies :', favoriteMovies);
console.log('favoriteShows :', favoriteShows);

const addToFavorites = (id, type) => {
  console.log('work :', id);
  if (type === 'movie') {
    if (!favoriteMovies.includes(id)) {
      favoriteMovies.push(id);
      localStorage.setItem('favoriteMovies', `${favoriteMovies.join(',')}`)
    }
  } else {
    if (!favoriteShows.includes(id)) {
      favoriteShows.push(id);
      localStorage.setItem('favoriteShows', `${favoriteShows.join(',')}`);
      // console.log('localStorage.getItem :', localStorage.getItem('favoriteShows'));
    }
  }
}

export default addToFavorites;
