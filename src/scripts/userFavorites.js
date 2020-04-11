'use strict';
//сохранялочка айдишников любимых фильмов и сериалов(callback), передпл аргументы так: ((((addEventListener('click',()=> addTofavorites(аргумнты)))))
import refs from '../index.js'

//let - что-бы локал сторедж мог их заменять

let favoriteMovies = [];
let favoriteShows = [];
// сначала происходит проверка на данные в локал сторедже и запись данных оттуда в переменные
if (localStorage.getItem('favoriteMovies') !== null) {
  favoriteMovies = localStorage.getItem("favoriteMovies").split(',');
};
if (localStorage.getItem('favoriteShows') !== null) {
  favoriteShows = localStorage.getItem("favoriteShows").split(',');
}
console.log('favoriteShows :', favoriteShows);
console.log('favoriteMovies :', favoriteMovies);

// функция, которая добавляет, или удаляет фильм(сериал), в зависимости от того есть ли он в массиве(если есть, то удаляет), так сделано для того, чтобы удалять фильм(сериал) через ту же кнопку

//сначала происходит проверка на тип(сериал,фильм), затем либо удаляется элемент, либо записывается
const favoritesManipulator = (id, type) => {
  //фильмы
  if (type === 'movie') {
    if (!favoriteMovies.includes(id)) {
      favoriteMovies.push(id);
    } else {
      favoriteMovies.splice(favoriteMovies.indexOf(id), 1);
    }
    localStorage.setItem('favoriteMovies', `${favoriteMovies.join(',')}`)
    //сериалы
  } else if(type === 'tv') {
    if (!favoriteShows.includes(id)) {
      favoriteShows.push(id);
      // console.log('localStorage.getItem :', localStorage.getItem('favoriteShows'));
    } else {
      favoriteShows.splice(favoriteShows.indexOf(id), 1);
    }
    localStorage.setItem('favoriteShows', `${favoriteShows.join(',')}`);
  }
  favoriteShows = [];
}


export {favoritesManipulator,favoriteMovies,favoriteShows};
