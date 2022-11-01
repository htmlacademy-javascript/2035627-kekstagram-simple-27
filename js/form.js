import { isEscapeKey } from './util.js';
import { resetImageSettings } from './picture-effects.js';

const uploadOverlay = document.querySelector('.img-upload__overlay');
const fileInput = document.querySelector('#upload-file');
const uploadForm = document.querySelector('.img-upload__form');

const toggleClasses = (isModalOpen = true) => {
  document.body.classList.toggle('modal-open', isModalOpen);
  uploadOverlay.classList.toggle('hidden', !isModalOpen);
};

const closeModal = () => {
  toggleClasses(false);
  resetImageSettings();
};

const closeModalOnEscape = (evt) => {
  if (isEscapeKey(evt)) {
    evt.preventDefault();
    closeModal();
  }
};

const openModal = () => {
  toggleClasses();
  document.addEventListener('keydown', closeModalOnEscape);
};

fileInput.addEventListener('change', () => {
  openModal();
});

uploadForm.addEventListener('reset', () => {
  closeModal();
  document.removeEventListener('keydown', closeModalOnEscape);
});

document.addEventListener('keydown', (evt) => isEscapeKey(evt) && closeModal());
