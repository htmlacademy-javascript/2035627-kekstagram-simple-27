import { closeModal } from './form-uploading.js';
import { sendData } from './api.js';
import { showAlert } from './alerts.js';

const submitButton = document.querySelector('.img-upload__submit');
const uploadForm = document.querySelector('.img-upload__form');

const blockSubmitButton = () => {
  submitButton.disabled = true;
  submitButton.textContent = 'Подождите, идёт отправка фото';
};

const unblockSubmitButton = () => {
  submitButton.disabled = false;
  submitButton.textContent = 'Опубликовать';
};

const pristine = new Pristine(uploadForm, {
  classTo: 'img-upload__text',
  errorTextParent: 'img-upload__text',
  errorTextClass: 'img-upload__text-error',
});

const onSubmitFormData = (evt) => {
  evt.preventDefault();
  const isValid = pristine.validate();

  if (isValid) {
    blockSubmitButton();
    const formData = new FormData(evt.target);
    sendData(
      () => {
        closeModal();
        showAlert('success');
        unblockSubmitButton();
      },
      () => {
        showAlert('error');
        unblockSubmitButton();
      },
      formData
    );
  }
};

export { onSubmitFormData, pristine, uploadForm };
