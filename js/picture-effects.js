const pictureEffects = [
  { effect: 'effects__preview--none', id: 'effect-none' },
  { effect: 'effects__preview--chrome', id: 'effect-chrome' },
  { effect: 'effects__preview--sepia', id: 'effect-sepia' },
  { effect: 'effects__preview--marvin', id: 'effect-marvin' },
  { effect: 'effects__preview--phobos', id: 'effect-phobos' },
  { effect: 'effects__preview--heat', id: 'effect-heat' },
];

const imagePreview = document.querySelector('.img-upload__preview');
const effectsList = document.querySelector('.effects__list');
const effectsInput = document.querySelector('.effects__radio');

const setPictureEffect = () => {
  const onEffectChange = (evt) => {
    // eslint-disable-next-line no-shadow
    pictureEffects.forEach((pictureEffects) => {
      const currentEffect = pictureEffects.effect;
      if (evt.target.checked && evt.target.id === pictureEffects.id) {
        imagePreview.className = currentEffect;
      }
    });
  };
  effectsList.addEventListener('change', onEffectChange);
};

effectsInput.addEventListener('click', setPictureEffect);
