'use strict';
//отрисовка всех элементов
import promo from '../templates/promo.hbs';
// import notFound from '../templates/notFound.hbs';
import refs from '../index.js';
import apiCreator from './apiCreator.js';
let apiData = {}; //объект со всеми данными по api(изменяется через showPromo())


//промо фильма(вывод блока фильма)
// принимает как параметр api, который нужно отрисовать(передается через filmSearcher, showPopular)
// на втором шаге записывает данные апи в переменную apiData для проверки лоад мором кол-ва страниц, затем, если ничего не будет найдено, то вернет (undefined),если же все будет нормально, то вернет массив результатов

// на втором шаге, если результаты будут равны undefined,то станет видимой блок с текстом ('ничего не найдено') и промис вернет null(чтобы catch не жаловалось)
// если же все будет нормально, то сначала скроется блок(ничего не найдено), потом пройзойдет отрисовка(через forEach)
//данные по фильму будут записаны в объект filmData, затем произойдет проверка на то, фильм это или сериал(если film.title ==='undefined'(потому что в сериалах используется film.name))
// если окажется, что сериал, то некоторые данные в filmData запишутся по другому(например title перейдет в name)

//потом все фильмы инсертятся в блок с фильмами через модалку(promo)

// после отрисовки в рефсы добавляются псевдомассив со всеми блоками с фильмами и их кнопки(для получения детальной инфы по фильму)
const showPromo = (api) => {
  fetch(api)
    .then(response => response.json())
    .then(data => {
      apiData = data;
      if (data.total_pages === 0 || data.hasOwnProperty('errors')) {
        return undefined; // для вывода сообщения('ничего не найдено')
      }

      return data.results;
    })
    .then(results => {
      //вывод сообщения notFound
      if (results === undefined) {
        refs.not_found_block.style.display = 'block';
        refs.load_more_btn.style.display = 'none';
        return null; //чтобы catch не жаловалось
      }
      //удаление сообщения notFound при новом поиске
      refs.not_found_block.style.display = 'none';
      //


      results.forEach(film => {
        //вставка тегов с фильмами

        const filmData = {
          filmImgLink: apiCreator.image(film.poster_path, true),
          filmVote: film.vote_average,
          filmTitle: film.title,
          filmId: film.id
        };
        if (film.title === undefined) {
          filmData.filmTitle = film.name;
        }
        if (film.poster_path === null) {
          filmData.filmImgLink = 'https://seor.ua/media/img/default-image.jpg';
        }
        refs.films_block.insertAdjacentHTML('beforeend', promo(filmData));
      })
      refs.film_promo = document.querySelectorAll('.film_promo');
      refs.film_promo_btn = document.querySelectorAll('.film_promo_btn');

    }).catch(err => console.log('err ' + err));
}
//промо фильма

export {
  apiData,
  showPromo
};
