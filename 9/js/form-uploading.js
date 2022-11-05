import { isEscapeKey } from './util.js';
import { resetImageSettings } from './picture-effects.js';
import { submitFormData, pristine, uploadForm } from './form-validation.js';

const uploadOverlay = document.querySelector('.img-upload__overlay');
const fileInput = document.querySelector('#upload-file');
const commentField = document.querySelector('.text__description');

const toggleClasses = (isModalOpen = true) => {
  document.body.classList.toggle('modal-open', isModalOpen);
  uploadOverlay.classList.toggle('hidden', !isModalOpen);
};

const closeModal = () => {
  if (!document.body.contains(document.querySelector('.error'))) {
    toggleClasses(false);
    resetImageSettings();
    uploadForm.reset();
    pristine.reset();
  }
};
const isCommentFieldFocused = () => document.activeElement === commentField;

const closeModalOnEscape = (evt) => {
  if (isEscapeKey(evt) && !isCommentFieldFocused()) {
    evt.preventDefault();
    closeModal();
  }
};

const openModal = () => {
  toggleClasses();
  document.addEventListener('keydown', closeModalOnEscape);
  uploadForm.addEventListener('submit', submitFormData);
};

fileInput.addEventListener('change', () => {
  openModal();
});

uploadForm.addEventListener('reset', () => {
  closeModal();
  document.removeEventListener('keydown', closeModalOnEscape);
  uploadForm.removeEventListener('submit', submitFormData);
});

export { closeModal };
