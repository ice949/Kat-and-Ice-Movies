
const popupContainer = document.querySelector('.popup');

const popup = (ID,arr) => {
  const movie = {
    name: arr[ID-1].name,
    image:arr[ID-1].image.medium,
    language:arr[ID-1].language,
    genre:arr[ID-1].genre,
    rating:arr[ID-1].rating.average,
    summary:arr[ID-1].summary
  };
  const popDiv = document.createElement('div');
  popDiv.classList.add('pop_up');
  const closeDiv = document.createElement('div');
  closeDiv.classList.add('close_div');
  closeDiv.innerHTML = `<i class="fa-solid fa-xmark close-btn"></i>`;
  const popImage = document.createElement('img');
  popImage.setAttribute('src', `${movie.image}`);
  const title = document.createElement('h2');
  title.innerHTML = `${movie.name}`;
  const specs1 = document.createElement('div');
  specs1.classList.add('specs');
  const language = document.createElement('p');
  language.innerHTML = `Name: ${movie.language}`;
  const rating = document.createElement('p');
  rating.innerHTML = `Rating: ${movie.rating}`;

  specs1.appendChild(language);
  specs1.appendChild(rating);
  
  
  // const specs2 = document.createElement('div');
  // specs2.classList.add('specs');
  // const genre = document.createElement('p');
  // genre.innerHTML = `${movie.genre}`;
  // const summary = document.createElement('p');
  // summary.innerHTML = `${movie.summary}`;

  // specs2.appendChild(genre);
  // specs2.appendChild(summary);

  const commentsDiv = document.createElement('div');
  commentsDiv.classList.add('comments_div');
  const commentHeading = document.createElement('h3');
  commentHeading.innerHTML = `Comments <span></span>`;
  const commentsContainer = document.createElement('ul');
  commentsContainer.classList.add('coments-container');

  commentsDiv.appendChild(commentHeading);
  commentsDiv.appendChild(commentsContainer);

  const commentForm = document.createElement('form');
  commentForm.classList.add('comment-form');
  const formHeading = document.createElement('h3');
  formHeading.innerHTML = 'Add a comment';
  const formInput = document.createElement('input');
  formInput.setAttribute('type','text');
  formInput.placeholder = 'Your name';
  formInput.id = 'name';
  const textArea = document.createElement('textarea');
  textArea.setAttribute('name','comment');
  textArea.placeholder = 'Your insights';
  const formButton = document.createElement('button');
  formButton.setAttribute('type', 'submit'),
  formButton.innerHTML = 'Comment';

  commentForm.appendChild(formHeading);
  commentForm.appendChild(formInput);
  commentForm.appendChild(textArea);
  commentForm.appendChild(formButton);



  popDiv.appendChild(closeDiv);
  popDiv.appendChild(popImage);
  popDiv.appendChild(title);
  popDiv.appendChild(specs1);
  // popDiv.appendChild(specs2);
  popDiv.appendChild(commentsDiv);
  popDiv.appendChild(commentForm);

  popupContainer.append(popDiv);

  const closeBtn = document.querySelector('.close-btn')

  closeBtn.addEventListener('click', (e) => {
    e.preventDefault();
    popupContainer.innerHTML = "";
  })
}
export default popup;


