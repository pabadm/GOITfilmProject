import refs from '../index.js';
import filmPopular from './filmPopular.js';

let typeOfFilm = 'movie';//по умолчанию(сериал либо фильм)

const switcher = (event) =>{
    if(typeOfFilm === 'movie'){
        event.target.textContent = 'switch to movies';
        refs.film_search_form.firstElementChild.placeholder = 'search for tv shows';
        typeOfFilm = 'tv';
    }else{
        event.target.textContent = 'switch to tv shows';
        refs.film_search_form.firstElementChild.placeholder = 'search for movies';
        typeOfFilm = 'movie';
    }
    filmPopular(null);//null что-бы не сработала проверка на андефайнд
}

export {switcher, typeOfFilm};