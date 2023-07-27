import { effects } from './effects.js';

const sliderContainer = document.querySelector('.img-upload__effect-level');
const sliderElement = document.querySelector('.effect-level__slider');
const effectsValue = document.querySelector('.effect-level__value');
const uploadImg = document.querySelector('.img-upload__preview img');
const effectsList = document.querySelector('.effects__list');

const defaultEffect = effects.none;

const hideSlider = () => sliderContainer.classList.add('hidden');
const showSlider = () => sliderContainer.classList.remove('hidden');

export const resetVisual = () => {
  uploadImg.style.filter = '';
  hideSlider();
};

hideSlider();

noUiSlider.create(sliderElement, {
  range: {
    min: defaultEffect.min,
    max: defaultEffect.max,
  },
  start: defaultEffect.max,
  step: defaultEffect.step,
  connect: 'lower',
});


const updateSliderOptions = (style) => {
  sliderElement.noUiSlider.updateOptions({
    range: {
      min: effects[style].min,
      max: effects[style].max,
    },
    start: effects[style].max,
    step: effects[style].step,
  });

  if(effects[style] === defaultEffect) {
    resetVisual();
  } else {
    showSlider();
  }
};

export const changeEffects = () => {
  effectsList.addEventListener('change', (evt) => {
    const targetInput = evt.target.closest('input[type="radio"]');
    if (!targetInput) {
      return false;
    } else {
      const filterName = targetInput.getAttribute('id').split('-')[1];
      const effectName = effects[filterName].effect;
      sliderElement.noUiSlider.on('update', () => {
        effectsValue.value = sliderElement.noUiSlider.get();
        uploadImg.style.filter = `${effectName }(${ effectsValue.value }${effects[filterName].unit })`;
      });
      updateSliderOptions(filterName);
    }
  });
};
