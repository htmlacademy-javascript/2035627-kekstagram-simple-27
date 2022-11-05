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
    document.removeEventListener('keydown', onEscDown);
  }

  function onEscDown(evt) {
    if (isEscapeKey(evt)) {
      onCloseAlertElement();
    }
  }

  alertButton.addEventListener('click', onCloseAlertElement);
  document.addEventListener('keydown', onEscDown);

  document.body.appendChild(alertElement);
};

export { showAlert };
