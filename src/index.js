import './style.css';

import getMovies from './modules/renderMovies.js';

window.addEventListener('DOMContentLoaded', () => {
  // listContainer.innerHTML = ' ';
  getMovies();
});
