import { isEscapeKey } from './util.js';

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

export { showAlert };
