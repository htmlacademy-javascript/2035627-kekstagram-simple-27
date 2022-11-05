import { showAlert } from './alerts.js';
import { getData } from './api.js';

const picturesContainer = document.querySelector('.pictures');
const pictureTemplate = document
  .querySelector('#picture')
  .content.querySelector('.picture');

const renderSimilarPictures = (pictures) => {
  const pictureFragment = document.createDocumentFragment();

  pictures.forEach(({ url, likes, comments }) => {
    const newPicture = pictureTemplate.cloneNode(true);
    newPicture.querySelector('.picture__img').src = url;
    newPicture.querySelector('.picture__likes').textContent = likes;
    newPicture.querySelector('.picture__comments').textContent = comments;
    pictureFragment.appendChild(newPicture);
  });

  picturesContainer.appendChild(pictureFragment);
};

getData(renderSimilarPictures, showAlert);
