const effectsList = document.querySelector('.effects__list');
const sliderContainer = document.querySelector('.effect-level');
const sliderElement = document.querySelector('.effect-level__slider');
const sliderValue = document.querySelector('.effect-level__value');
const imagePreview = document.querySelector('.img-upload__preview img');

let currentEffect = '';
let currentPostfix = '';

const DEFAULT_START = 100;

const FROM_ZERO_TO_1 = {
  min: 0,
  max: 1,
};
const FROM_ZERO_TO_100 = {
  min: 0,
  max: 100,
};

const SLIDER_SETTINGS = {
  none: {
    range: FROM_ZERO_TO_100,
    step: 1,
    postfix: '',
  },
  chrome: {
    range: FROM_ZERO_TO_1,
    step: 0.1,
    filter: 'grayscale',
    postfix: '',
  },
  sepia: {
    range: FROM_ZERO_TO_1,
    step: 0.1,
    filter: 'sepia',
    postfix: '',
  },
  marvin: {
    range: FROM_ZERO_TO_100,
    step: 1,
    filter: 'invert',
    postfix: '%',
  },
  phobos: {
    range: {
      min: 0,
      max: 3,
    },
    step: 0.1,
    filter: 'blur',
    postfix: 'px',
  },
  heat: {
    range: {
      min: 1,
      max: 3,
    },
    step: 0.1,
    filter: 'brightness',
    postfix: '',
  },
};

sliderContainer.classList.add('hidden');

noUiSlider.create(sliderElement, {
  range: FROM_ZERO_TO_100,
  start: DEFAULT_START,
  step: 1,
  connect: 'lower',
});

const onUpdateSliderSettings = ({ range, step, filter, postfix }) => {
  currentEffect = filter;
  currentPostfix = postfix;

  sliderElement.noUiSlider.updateOptions({
    range: range,
    step: step,
    start: 100,
  });
};

sliderElement.noUiSlider.on('update', () => {
  const currentValue = sliderElement.noUiSlider.get();

  imagePreview.style.filter = `${currentEffect}(${currentValue}${currentPostfix})`;
  sliderValue.setAttribute('value', currentValue);
});

const showSlider = () => {
  sliderContainer.classList.remove('hidden');
};

const closeSlider = () => {
  sliderContainer.classList.add('hidden');
};

const resetImageSettings = () => {
  imagePreview.style.transform = '';
  imagePreview.style.filter = '';
  imagePreview.className = '';

  closeSlider();
  onUpdateSliderSettings(SLIDER_SETTINGS.none);
};

const changeEffect = (evt) => {
  imagePreview.classList = '';
  imagePreview.style.filter = '';
  if (evt.target.value !== 'none') {
    showSlider();
    imagePreview.classList.add(`effects__preview--${evt.target.value}`);
    onUpdateSliderSettings(SLIDER_SETTINGS[evt.target.value]);
  } else {
    closeSlider();
  }
};
effectsList.addEventListener('change', changeEffect);

export { resetImageSettings };
