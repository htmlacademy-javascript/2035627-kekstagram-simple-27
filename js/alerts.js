import { isEscapeKey } from './util.js';

const alertShowTime = 5000;
const showAlert = (alert) => {
  const alertTemplate = document
    .querySelector(`#${alert}`)
    .content.querySelector(`.${alert}`);
  const alertElement = alertTemplate.cloneNode(true);

  const alertButton = alertElement.querySelector(`.${alert}__button`);

  function onCloseAlertElement() {
    alertElement.remove();
    alertButton.removeEventListener('click', onCloseAlertElement);
    document.removeEventListener('keydown', onEscapeDown);
    document.removeEventListener('click', onOutsideClick);
  }

  function onEscapeDown(evt) {
    if (isEscapeKey(evt)) {
      onCloseAlertElement();
    }
  }
  function onOutsideClick(evt) {
    if (
      !evt.target.contains(document.querySelector('.error')) ||
      !evt.target.contains(document.querySelector('.success'))
    ) {
      onCloseAlertElement();
    }
  }
  alertButton.addEventListener('click', onCloseAlertElement);
  document.addEventListener('keydown', onEscapeDown);
  document.addEventListener('click', onOutsideClick);

  document.body.appendChild(alertElement);
};

const showServerAlert = (message) => {
  const alertContainer = document.createElement('div');
  alertContainer.className = 'server-error';
  alertContainer.textContent = message;
  document.body.append(alertContainer);

  setTimeout(() => {
    alertContainer.remove();
  }, alertShowTime);
};

export { showAlert, showServerAlert };
