import popup from './popwindow.js';

import { addLike, getLikes } from './likes.js';

const MoviesContainer = document.querySelector('.movies');
const url = 'https://api.tvmaze.com/shows';

const moviesCounter = (arr) => {
  const counter = document.querySelector('.count');
  counter.innerHTML = arr.length;
};

const renderMovie = (movieList) => {
  const movies = (movieList);
  // counter.innerHTML = `(${movies.length})`;
  movies.forEach((movie) => {
    const indmov = document.createElement('div');
    indmov.classList.add('ind-mov');
    indmov.id = `${movie.id}`;
    indmov.innerHTML = `<img src="${movie.image.medium}" />`;
    const nameAndLikeDiv = document.createElement('div');
    nameAndLikeDiv.classList.add('name-like');
    const movTitle = document.createElement('h3');
    movTitle.classList.add('mov-title');
    movTitle.innerHTML = `${movie.name}`;
    const LikeDiv = document.createElement('div');
    LikeDiv.classList.add('like-icon');
    LikeDiv.id = `${movie.id}`;
    LikeDiv.innerHTML = `<i class="fa-solid fa-heart like-btn" id="${movie.id}"></i> <p><span class="lik" id="${movie.id}"></span> Likes</p>`;
    nameAndLikeDiv.appendChild(movTitle);
    nameAndLikeDiv.appendChild(LikeDiv);
    const commentBtn = document.createElement('button');
    commentBtn.classList.add('comment-btn');
    commentBtn.id = movie.id;
    commentBtn.innerHTML = 'Comments';
    const reserveBtn = document.createElement('button');
    reserveBtn.classList.add('reserve-btn');
    reserveBtn.innerHTML = 'Reservations';
    indmov.appendChild(nameAndLikeDiv);
    indmov.appendChild(commentBtn);
    indmov.appendChild(reserveBtn);

    MoviesContainer.appendChild(indmov);

    LikeDiv.firstChild.addEventListener('click', (e) => {
      const BTN = e.target.parentElement;
      const numBtn = BTN.getElementsByTagName('p')[0].getElementsByTagName('span')[0];
      addLike(e.target.id, numBtn);
    });
    commentBtn.addEventListener('click', (e) => {
      e.preventDefault();
      const { id } = e.target;
      popup(id, movies);
    });

    moviesCounter(movies);

    const { id } = indmov;
    const numBtn = indmov.querySelector('.lik');
    getLikes(id, numBtn);
  });
};

const getMovies = async () => {
  const res = await fetch(url);
  const data = await res.json();
  const movieArr = await data.splice(0, 16);
  renderMovie(movieArr);
  return movieArr;
};
export { getMovies, moviesCounter };