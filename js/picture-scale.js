import { removeLastSymbol, toNumber } from './util.js';

const MAX_SCALE = 100;
const MIN_SCALE = 25;
const STEP = 25;

const buttonBigger = document.querySelector('.scale__control--bigger');
const buttonSmaller = document.querySelector('.scale__control--smaller');
const scaleValue = document.querySelector('input[name="scale"]');
const imagePreview = document.querySelector('.img-upload__preview img');

buttonBigger.addEventListener('click', () => {
  const currentValue = scaleValue.value;
  const numberValue = toNumber(removeLastSymbol(currentValue));
  if (numberValue < MAX_SCALE) {
    const newValue = numberValue + STEP;
    scaleValue.value = `${newValue}%`;
    imagePreview.style.transform = `scale(${newValue / 100})`;
  }
});
buttonSmaller.addEventListener('click', () => {
  const currentValue = scaleValue.value;
  const numberValue = toNumber(removeLastSymbol(currentValue));
  if (numberValue > MIN_SCALE) {
    const newValue = numberValue - STEP;
    scaleValue.value = `${newValue}%`;
    imagePreview.style.transform = `scale(${newValue / 100})`;
  }
});
