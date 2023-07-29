const scaleButtonSmaller = document.querySelector('.scale__control--smaller');
const scaleButtonBigger = document.querySelector('.scale__control--bigger');
const scaleValue = document.querySelector('.scale__control--value');
const uploadImg = document.querySelector('.img-upload__preview img');

const SCALE_MIN = 0.25;
const SCALE_MAX = 1;
const SCALE_STEP = 0.25;
let scale = 1;

export const getScaleValue = (number) => {
  scaleValue.value = `${number * 100}%`;
  uploadImg.style.transform = `scale(${ number })`;
  scale = number;
};

export const scalingImage = () => {
  let number = 1;
  scaleButtonSmaller.onclick = () => {
    if (scale <= SCALE_MAX && scale > SCALE_MIN) {
      number = scale - SCALE_STEP;
      getScaleValue(number);
    }
  };
  scaleButtonBigger.onclick = () => {
    if (scale < SCALE_MAX && scale >= SCALE_MIN) {
      number = scale + SCALE_STEP;
      getScaleValue(number);
    }
  };
};
