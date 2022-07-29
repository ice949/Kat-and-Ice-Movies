import { commentCounter } from './comments.js';

const comments = [
  {
    comment: 'your ivie',
    creation_date: '2022-07-28',
    username: 'Katana',
  },
  {
    comment: 'your ivie',
    creation_date: '2022-07-28',
    username: 'Katana',
  },
  {
    comment: 'your ivie',
    creation_date: '2022-07-28',
    username: 'Katana',
  },
];

document.body.innerHTML = '<span class="comment-counter"></span>';

test('check the counter fucntion ', () => {
  commentCounter(comments);
  const Counter = document.querySelector('.comment-counter').innerHTML;
  expect(Counter).toBe('3');
});
