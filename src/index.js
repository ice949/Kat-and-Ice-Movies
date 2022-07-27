import './style.css';

import getMovies from './modules/renderMovies.js';

import renderLikes from './modules/likes.js';

window.addEventListener('DOMContentLoaded', () => {
  getMovies();
  renderLikes();
  // console.log(movieArr);
});
