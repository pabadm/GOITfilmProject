'use strict';
import refs from '../index.js';
import {showPromo} from './showPromo.js';
import {page, loadMoreReset} from './loadMore.js';
import apiCreator from './apiCreator.js';


const preloader = (event) => {
  if (event !== undefined) {
    loadMoreReset(preloader);
  }
  showPromo(apiCreator.popular(page));
}
export default preloader;
