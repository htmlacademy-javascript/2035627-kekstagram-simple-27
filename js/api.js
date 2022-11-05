const REMOTE_SERVER = 'https://27.javascript.pages.academy/kekstagram-simple';

const getData = (onSuccess, onError) =>
  fetch(`${REMOTE_SERVER}/data`)
    .then((response) => response.json())
    .then((pictures) => {
      onSuccess(pictures);
    })
    .catch(() => {
      onError('Что-то пошло не так. Попробуйте обновить страницу');
    });

const sendData = (onSuccess, onError, body) => {
  fetch(REMOTE_SERVER, {
    method: 'POST',
    body,
  })
    .then((response) => {
      if (response.ok) {
        return onSuccess();
      } else {
        onError();
      }
    })
    .catch(onError);
};

export { sendData, getData };
