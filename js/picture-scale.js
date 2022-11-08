const MAX_SCALE = 100;
const MIN_SCALE = 25;
const STEP = 25;

const buttonBigger = document.querySelector('.scale__control--bigger');
const buttonSmaller = document.querySelector('.scale__control--smaller');
const scaleValue = document.querySelector('input[name="scale"]');
const imagePreview = document.querySelector('.img-upload__preview img');

const updateValue = (newValue) => {
  scaleValue.value = `${newValue}%`;
  imagePreview.style.transform = `scale(${newValue / 100})`;
};

buttonBigger.addEventListener('click', () => {
  const currentValue = parseInt(scaleValue.value, 10) + STEP;
  updateValue(currentValue > MAX_SCALE ? MAX_SCALE : currentValue);
});

buttonSmaller.addEventListener('click', () => {
  const currentValue = parseInt(scaleValue.value, 10) - STEP;
  updateValue(currentValue < MIN_SCALE ? MIN_SCALE : currentValue);
});
