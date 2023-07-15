import {photoDescriptions} from './data.js';
import { isEscapeKey } from './util.js';

const bigPictureOverlay = document.querySelector('.big-picture');
const thumbnailPicture = document.querySelectorAll('.picture');
const body = document.querySelector('body');
const cancelButton = document.querySelector('.big-picture__cancel');
const commentCount = document.querySelector('.social__comment-count');
const commentsLoader = document.querySelector('.comments-loader');
const bigPictureElement = document.querySelector('.big-picture__img');
const commentList = document.querySelector('.social__comments');
const commentTemplate = document.querySelector('#comment').content;
const commentFragment = document.createDocumentFragment();
const pictureDescriptions = photoDescriptions();
const likesCount = document.querySelector('.likes-count');
const socialCaption = document.querySelector('.social__caption');

const createComment = () => {
  commentList.innerHTML = '';
  pictureDescriptions.forEach(({comments:{avatar, message, name}}) => {
    const commentElement = commentTemplate.cloneNode(true);
    commentElement.querySelector('.social__picture').src = avatar;
    commentElement.querySelector('.social__picture').alt = name;
    commentElement.querySelector('.social__text').textContent = message;
    commentFragment.append(commentElement);
  });
  commentList.appendChild(commentFragment);
};

const showSocialCaption = () => {
  pictureDescriptions.forEach(({description}) => {
    socialCaption.textContent = description;
  });
};

const closeModal = () => {
  bigPictureOverlay.classList.add('hidden');
  body.classList.remove('modal-open');
};

const hidePictureOverlay = () => {
  cancelButton.addEventListener('click', () => {
    closeModal();
  });
};

document.addEventListener('keydown', (evt) => {
  if (isEscapeKey(evt)) {
    closeModal();
  }
});

const addThumbnailClickHandler = function (thumbnail, photo) {
  thumbnail.addEventListener('click', () => {
    bigPictureOverlay.classList.remove('hidden');
    commentCount.classList.add('hidden');
    commentsLoader.classList.add('hidden');
    body.classList.add('modal-open');
    bigPictureElement.querySelector('img').src = photo;
    createComment();
    showSocialCaption();
    hidePictureOverlay();
    likesCount.textContent = document.querySelector('.picture__likes').textContent;
    commentCount.textContent = document.querySelector('.picture__comments').textContent;
  });
};

for (let i = 1; i <= thumbnailPicture.length; i++) {
  addThumbnailClickHandler(thumbnailPicture[i - 1], `photos/${[i]}.jpg`);
}

export {addThumbnailClickHandler};
