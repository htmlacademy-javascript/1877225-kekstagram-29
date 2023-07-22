import { isEscapeKey } from './util.js';

const imgUploadForm = document.querySelector('.img-upload__form');
const imgUploadInput = document.querySelector('.img-upload__input');
const imgUploadOverlay = document.querySelector('.img-upload__overlay');
const body = document.querySelector('body');
const imgUploadCancelButton = document.querySelector('.img-upload__cancel');
const hashtagStructure = /^#[a-zа-яё0-9]{1,19}$/i;
const errorTemplate = document.querySelector('#error').content.querySelector('.error');
const errorCloseButton = errorTemplate.querySelector('.error__button');
const hashtagsInput = document.querySelector('.text__hashtags');
const descriptionInput = document.querySelector('.text__description');
const successTemplate = document.querySelector('#success').content.querySelector('.success');
const successCloseButton = successTemplate.querySelector('.success__button');

const pristine = new Pristine(imgUploadForm, {
  classTo: 'img-upload__field-wrapper',
  errorTextParent: 'img-upload__field-wrapper',
  errorTextClass: 'img-upload__field-wrapper',
});

const closeUploadOverlay = () => {
  imgUploadOverlay.classList.add('hidden');
  body.classList.remove('modal-open');
  imgUploadInput.value = '';
  hashtagsInput.value = '';
  descriptionInput.value = '';
};

imgUploadCancelButton.addEventListener('click', () => {
  closeUploadOverlay();
});

document.addEventListener('keydown', (evt) => {
  if (isEscapeKey(evt)) {
    closeUploadOverlay();
  }
});

const stopPropagationEsc = (e) => {
  if (isEscapeKey(e)) {
    e.stopPropagation();
  }
};

imgUploadInput.addEventListener('change', () => {
  imgUploadOverlay.classList.remove('hidden');
  body.classList.add('modal-open');
  hashtagsInput.addEventListener('keydown', stopPropagationEsc);
  descriptionInput.addEventListener('keydown', stopPropagationEsc);
});

const showErrorMessage = () => {
  body.appendChild(errorTemplate);
  errorCloseButton.addEventListener('click', () => {
    body.removeChild(errorTemplate);
  });
};

const showSuccessMessage = () => {
  body.appendChild(successTemplate);
  successCloseButton.addEventListener('click', () => {
    body.removeChild(successTemplate);
  });
};

const getHashtagArray = (value) => value.trim().split(' ');

const checkUniqueHashtag = (value) => {
  const hashtag = getHashtagArray(value);
  return new Set(hashtag).size === hashtag.length;
};

const checkHashtagCount = (value) => {
  const hashtag = getHashtagArray(value);
  return hashtag.length <= 5;
};

const checkCorrectHashtag = (value) => hashtagStructure.test(value);

const checkCommentCount = (value) => value.length < 140;

pristine.addValidator(
  hashtagsInput,
  checkUniqueHashtag,
  'Хэш-теги не должны повторяться'
);

pristine.addValidator(
  hashtagsInput,
  checkHashtagCount,
  'Превышено допустимое количество хэш-тегов: 5'
);

pristine.addValidator(
  hashtagsInput,
  checkCorrectHashtag,
  'Неверный формат хэш-тега'
);

pristine.addValidator(
  descriptionInput,
  checkCommentCount,
  'Достигнут лимит 140 символов'
);

export const checkValidForm = () => {
  imgUploadForm.addEventListener('submit', (evt) => {
    evt.preventDefault();
    const isValid = pristine.validate();
    if (isValid) {
      showSuccessMessage();
    } else {
      showErrorMessage();
    }
  });
};
