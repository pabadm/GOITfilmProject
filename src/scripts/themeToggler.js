'use strict';
import refs from '../index.js';

let background = 'rgb(64, 69, 82)';
const themeToggler = (event) => {
    // console.log(refs.films_block.style.backgroundColor);
    if(background === null) background = 'rgb(64, 69, 82)';
    console.log('background :', background);
  if (background === 'rgb(64, 69, 82)') {
    background = 'rgb(255, 255, 255)';
  } else if (background === 'rgb(255, 255, 255)') {
    background = 'rgb(64, 69, 82)';
  }
  refs.films_block.style.backgroundColor = background;
  localStorage.setItem('background', `${background}`);
}
const themeDefault = () =>{
    if(localStorage.getItem('background') !== ''){
        background = localStorage.getItem('background');
    }else{
        background = 'rgb(64, 69, 82)';
    }
    // background = localStorage.getItem('background');
    refs.films_block.style.backgroundColor = background;
}

export {themeToggler, themeDefault};
