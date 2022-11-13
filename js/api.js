import { showServerAlert } from './alerts.js';

const REMOTE_SERVER = 'https://27.javascript.pages.academy/kekstagram-simple';
const serverErrorMessage =
  'Что-то пошло не так:( Попробуйте перезагрузить страницу';

const getData = (onSuccess) =>
  fetch(`${REMOTE_SERVER}/data`)
    .then((response) => response.json())
    .then((pictures) => {
      onSuccess(pictures);
    })
    .catch(() => {
      showServerAlert(serverErrorMessage);
    });

const sendData = (onSuccess, onError, body) => {
  fetch(REMOTE_SERVER, {
    method: 'POST',
    body,
  })
    .then((response) => {
      if (response.ok) {
        onSuccess();
      } else {
        onError(serverErrorMessage);
      }
    })
    .catch(() => {
      onError(serverErrorMessage);
    });
};

export { sendData, getData };
