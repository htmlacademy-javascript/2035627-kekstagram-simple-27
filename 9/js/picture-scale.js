import { removeLastSymbol } from './util.js';

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
  const currentValue = scaleValue.value;
  const numberValue = Number(removeLastSymbol(currentValue));
  if (numberValue < MAX_SCALE) {
    updateValue(numberValue + STEP);
  }
  if (numberValue > MAX_SCALE) {
    updateValue(MAX_SCALE);
  }
});

buttonSmaller.addEventListener('click', () => {
  const currentValue = scaleValue.value;
  const numberValue = Number(removeLastSymbol(currentValue));
  if (numberValue > MIN_SCALE) {
    updateValue(numberValue - STEP);
  }
  if (numberValue < MIN_SCALE) {
    updateValue(MIN_SCALE);
  }
});
