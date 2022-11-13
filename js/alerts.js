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
    document.removeEventListener('keydown', onEscapeDown);
    document.removeEventListener('click', onClickClose);
  }

  function onEscapeDown(evt) {
    if (isEscapeKey(evt)) {
      onCloseAlertElement();
    }
  }
  function onClickClose({target}) {
    if (target === alertElement || target === alertButton) {
      onCloseAlertElement();
    }
  }
  document.addEventListener('keydown', onEscapeDown);
  document.addEventListener('click', onClickClose);

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
