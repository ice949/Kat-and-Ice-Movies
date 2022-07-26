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
    LikeDiv.innerHTML = '<i class="fa-solid fa-heart"></i> <p>0 Likes</p>';
    nameAndLikeDiv.appendChild(movTitle);
    nameAndLikeDiv.appendChild(LikeDiv);
    const commentBtn = document.createElement('button');
    commentBtn.classList.add('comment-btn');
    commentBtn.innerHTML = 'Comments';
    const reserveBtn = document.createElement('button');
    reserveBtn.classList.add('reserve-btn');
    reserveBtn.innerHTML = 'Reservations';
    indmov.appendChild(nameAndLikeDiv);
    indmov.appendChild(commentBtn);
    indmov.appendChild(reserveBtn);

    MoviesContainer.appendChild(indmov);
  });
};

const getMovies = async () => {
  const res = await fetch(url);
  const data = await res.json();
  renderMovie(data);
  // console.log(data);
};
export default getMovies;
