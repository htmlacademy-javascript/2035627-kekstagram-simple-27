import { isEscapeKey } from './util.js';
import { resetImageSettings } from './picture-effects.js';
import { onSubmitFormData, pristine, uploadForm } from './form-validation.js';

const uploadOverlay = document.querySelector('.img-upload__overlay');
const fileInput = document.querySelector('#upload-file');
const commentField = document.querySelector('.text__description');
const fileChooser = document.querySelector('.img-upload__input');
const imagePreview = document.querySelector('.img-upload__preview img');

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

const onEscapeDown = (evt) => {
  if (isEscapeKey(evt) && !isCommentFieldFocused()) {
    evt.preventDefault();
    closeModal();
  }
};

const openModal = () => {
  toggleClasses();
  document.addEventListener('keydown', onEscapeDown);
  uploadForm.addEventListener('submit', onSubmitFormData);
};

fileInput.addEventListener('change', () => {
  openModal();
});

uploadForm.addEventListener('reset', () => {
  closeModal();
  document.removeEventListener('keydown', onEscapeDown);
  uploadForm.removeEventListener('submit', onSubmitFormData);
});

//Загрузка пользовательского фото(для интереса)
fileChooser.addEventListener('change', () => {
  const file = fileChooser.files[0];
  imagePreview.src = URL.createObjectURL(file);
});

export { closeModal, imagePreview };
