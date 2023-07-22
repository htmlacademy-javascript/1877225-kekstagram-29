import { isEscapeKey } from './util.js';

const bigPictureOverlay = document.querySelector('.big-picture');
const body = document.querySelector('body');
const cancelButton = document.querySelector('.big-picture__cancel');
const socialCommentCount = document.querySelector('.social__comment-count');
const commentCount = document.querySelector('.comments-count');
const commentsLoader = document.querySelector('.comments-loader');
const bigPictureElement = document.querySelector('.big-picture__img');
const commentList = document.querySelector('.social__comments');
const commentTemplate = document.querySelector('#comment').content;
const likesCount = document.querySelector('.likes-count');
const socialCaption = document.querySelector('.social__caption');

const createComment = ({ avatar, message, name }) => {
  const commentElement = commentTemplate.cloneNode(true);
  commentElement.querySelector('.social__picture').src = avatar;
  commentElement.querySelector('.social__picture').alt = name;
  commentElement.querySelector('.social__text').textContent = message;
  return commentElement;
};

const showComments = (comments) => {
  commentList.innerHTML = '';
  const picturesPreviewFragment = document.createDocumentFragment();

  comments.forEach((item) => {
    const comment = createComment(item);
    picturesPreviewFragment.append(comment);
  });

  commentList.append(picturesPreviewFragment);
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

export const thumbnailClickHandler = (url, description, likes, comments) => {
  bigPictureOverlay.classList.remove('hidden');
  socialCommentCount.classList.add('hidden');
  commentsLoader.classList.add('hidden');
  body.classList.add('modal-open');
  bigPictureElement.querySelector('img').src = url;
  socialCaption.textContent = description;
  commentCount.textContent = comments.length;
  likesCount.textContent = likes;
  showComments(comments);
  hidePictureOverlay();
};
