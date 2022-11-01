const effectsList = document.querySelector('.effects__list');
const sliderContainer = document.querySelector('.effect-level');
const sliderElement = document.querySelector('.effect-level__slider');
const sliderValue = document.querySelector('.effect-level__value');
const imagePreview = document.querySelector('.img-upload__preview');

let currentEffect = '';
let currentPostfix = '';

const sliderSettings = {
  none: {
    range: {
      min: 0,
      max: 100,
    },
    step: 1,
    postfix: '',
  },
  chrome: {
    range: {
      min: 0,
      max: 1,
    },
    step: 0.1,
    filter: 'grayscale',
    postfix: '',
  },
  sepia: {
    range: {
      min: 0,
      max: 1,
    },
    step: 0.1,
    filter: 'sepia',
    postfix: '',
  },
  marvin: {
    range: {
      min: 0,
      max: 100,
    },
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
//Создаю слайдер
noUiSlider.create(sliderElement, {
  range: {
    min: 0,
    max: 100,
  },
  start: 100,
  step: 1,
  connect: 'lower',
});

//Меняю настройки слайдера
const updateSliderSettings = ({ range, step, filter, postfix }) => {
  currentEffect = filter;
  currentPostfix = postfix;

  sliderElement.noUiSlider.updateOptions({
    range: range,
    step: step,
    start: 100,
  });
};

//Получаю значения слайдера
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
  imagePreview.classList = '';

  closeSlider();
  updateSliderSettings(sliderSettings.none);
};

const changeEffect = (evt) => {
  imagePreview.classList = '';
  imagePreview.style.filter = '';
  if (evt.target.value !== 'none') {
    showSlider();
    imagePreview.classList.add(`effects__preview--${evt.target.value}`);
    updateSliderSettings(sliderSettings[evt.target.value]);
  } else {
    closeSlider();
  }
};
effectsList.addEventListener('change', changeEffect);

export { resetImageSettings };
