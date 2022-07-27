import addLike from './likes.js';
import popup from './popwindow.js';

// import addLike from "./modules/likes";

const MoviesContainer = document.querySelector('.movies');
const url = 'https://api.tvmaze.com/shows';

const renderMovie = (movieList) => {
  const movies = (movieList);
  movies.forEach((movie) => {
    const indmov = document.createElement('div');
    indmov.classList.add('ind-mov');
    indmov.innerHTML = `<img src="${movie.image.medium}" />`;
    const nameAndLikeDiv = document.createElement('div');
    nameAndLikeDiv.classList.add('name-like');
    const movTitle = document.createElement('h3');
    movTitle.classList.add('mov-title');
    movTitle.innerHTML = `${movie.name}`;
    const LikeDiv = document.createElement('div');
    LikeDiv.classList.add('like-icon');
    LikeDiv.id = `${movie.id}`;
    LikeDiv.innerHTML = `<i class="fa-solid fa-heart like-btn" id="${movie.id}"></i> <p><span></span> Likes</p>`;
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
      // console.log(popup);
    });
  });
};

const getMovies = async () => {
  const res = await fetch(url);
  const data = await res.json();
  const movieArr = await data.splice(0, 16);
  renderMovie(movieArr);
  return data;
};
export default getMovies;
