import { isEscapeKey } from './util.js';

const uploadOverlay = document.querySelector('.img-upload__overlay');
const modalButtonCLose = document.querySelector('.img-upload__cancel');
const fileInput = document.querySelector('#upload-file');
const uploadForm = document.querySelector('.img-upload__form');

const changeBodyClass = () => {
  document.body.classList.toggle('modal-open');
};

const closeModal = () => {
  uploadOverlay.classList.add('hidden');
  changeBodyClass();
  uploadForm.reset();
  // eslint-disable-next-line no-use-before-define
  document.removeEventListener('keydown', closeModalOnEscape);
};

const closeModalOnEscape = (evt) => {
  if (isEscapeKey(evt)) {
    evt.preventDefault();
    closeModal();
  }
};

const openModal = () => {
  uploadOverlay.classList.remove('hidden');
  changeBodyClass();
  document.addEventListener('keydown', closeModalOnEscape);
};

fileInput.addEventListener('change', () => {
  openModal();
});


modalButtonCLose.addEventListener('click', () => {
  closeModal();
});

document.addEventListener('keydown', (evt) => {
  if (isEscapeKey(evt)) {
    closeModal();
  }
});
