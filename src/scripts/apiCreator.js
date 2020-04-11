'use strict';




//создаватель api(объект с функциями)(каждая возвращает ссылку на api)
//type - (тип) сериалы либо фильмы
const apiCreator = {
  search: (page, query, type = 'movie') => {
    return `https://api.themoviedb.org/3/search/${type}?api_key=4aa539255aa0c2506cf45806a15a8a0a&language=en-US&page=${page}&include_adult=false&query=${query}`;
  },
  popular: (page, type = 'movie') => {
    return `https://api.themoviedb.org/3/${type}/popular?api_key=4aa539255aa0c2506cf45806a15a8a0a&language=en-US&page=${page}&include_adult=false`;
  },
  image: function (link, w500 = false) {
    if (w500 === true) {
      return `https://image.tmdb.org/t/p/w500${link}`;
    }
    return `https://image.tmdb.org/t/p/original/${link}`
  },
  movie: (id, type = 'movie') => {
    return `https://api.themoviedb.org/3/${type}/${id}?api_key=4aa539255aa0c2506cf45806a15a8a0a&language=en-US`;
    
  },
}
//создаватель api

export default apiCreator;
