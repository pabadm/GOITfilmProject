import './styles.css';
const refs = {
    films_background: document.querySelector('.films_background'),
    film_search: document.querySelector('.film_search'),
};


//промо фильма
import promo from './templates/promo.hbs';
const showPromo = (api, how) =>{
fetch(api)
.then(response => response.json())
.then(data => {
    const filmsArr = data.results;
    filmsArr.forEach(film =>{
        const filmData = {
            filmImgLink: film.poster_path,
            filmVote: film.vote_average,
            filmTitle: film.title
        };
        refs.films_background.insertAdjacentHTML(how, promo(filmData));
    }
    );
})
.catch(err => console.log('err ' + err));
}
//промо фильма




showPromo('https://api.themoviedb.org/3/movie/popular?api_key=4aa539255aa0c2506cf45806a15a8a0a&language=en-US&page=$1', 'beforeend');

// поиск фильма
const filmSearch = (event) =>{
    event.preventdefault;
    console.log('event:', refs.film_search.firstElementChild.value);
    showPromo(`https://api.themoviedb.org/3/search/movie?api_key=4aa539255aa0c2506cf45806a15a8a0a&language=en-US&page=2&include_adult=false&query=$${refs.film_search.firstElementChild.value}`, 'afterbegin')
}
refs.film_search.addEventListener('submit', filmSearch);

// поиск фильма