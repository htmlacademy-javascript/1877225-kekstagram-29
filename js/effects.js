export const effects = {
  none: {
    effect: 'none',
    min: 100,
    max: 100,
    step: 0,
    unit: ''
  },

  chrome: {
    effect: 'grayscale',
    min: 0,
    max: 1,
    step: 0.1,
    unit: ''
  },

  sepia: {
    effect: 'sepia',
    min: 0,
    max: 1,
    step: 0.1,
    unit: ''
  },

  marvin: {
    effect: 'invert',
    min: 0,
    max: 100,
    step: 1,
    unit: '%'
  },

  phobos: {
    effect: 'blur',
    min: 0,
    max: 3,
    step: 0.1,
    unit: 'px'
  },

  heat: {
    effect: 'brightness',
    min: 1,
    max: 3,
    step: 0.1,
    unit: ''
  },
};
