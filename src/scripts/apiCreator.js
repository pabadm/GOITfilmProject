'use strict';





//создаватель api(объект с функциями)(каждая возвращает ссылку на api)
const apiCreator = {
  search: (page, query) => {
    return `https://api.themoviedb.org/3/search/movie?api_key=4aa539255aa0c2506cf45806a15a8a0a&language=en-US&page=${page}&include_adult=false&query=${query}`;
  },
  popular: (page) => {
    return `https://api.themoviedb.org/3/movie/popular?api_key=4aa539255aa0c2506cf45806a15a8a0a&language=en-US&page=${page}&include_adult=false`;
  },
  image: function (link, w500 = false) {
    if (w500 === true) {
      return `https://image.tmdb.org/t/p/w500${link}`;
    }
    return `https://image.tmdb.org/t/p/original/${link}`
  },
  movie: (id) => {
    return `https://api.themoviedb.org/3/movie/${id}?api_key=e9f6322f77334e3f0406d6b8eabd79ce`;
    
  },
}
//создаватель api

export default apiCreator;
