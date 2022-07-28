import { moviesCounter } from './modules/renderMovies.js';

const movies = [
  {
    id: 1,
    name: 'Arrow',
    image: 'img.jpg',
  },
  {
    id: 1,
    name: 'Arrow',
    image: 'img.jpg',
  },
];

document.body.innerHTML = '<span class="count"></span>';

test('check the counter fucntion ', () => {
  moviesCounter(movies);
  const counter = document.querySelector('.count').innerHTML;
  expect(counter).toBe('2');
});
