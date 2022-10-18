import createPosts from './mocks.js';

const picturesContainer = document.querySelector('.pictures');
const pictureTemplate = document.querySelector('#picture').content.querySelector('.picture');
const pictures = createPosts();

const pictureFragment = document.createDocumentFragment();

pictures.forEach(({id, url, likes, comments}) => {
  const newPicture = pictureTemplate.cloneNode(true);
  newPicture.dataset.id = id;
  newPicture.querySelector('.picture__img').src = url;
  newPicture.querySelector('.picture__likes').textContent = likes;
  newPicture.querySelector('.picture__comments').textContent = comments;
  pictureFragment.appendChild(newPicture);
});

picturesContainer.appendChild(pictureFragment);
