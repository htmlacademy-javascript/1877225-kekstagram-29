import {photoDescriptions} from './data.js';

const picturesContainer = document.querySelector('.pictures');
const pictureTemplate = document.querySelector('#picture').content;
const thumbnailsDescriptions = photoDescriptions();
const thumbnailsFragment = document.createDocumentFragment();

thumbnailsDescriptions.forEach(({url, description, likes, comments}) => {
  const thumbnailElement = pictureTemplate.cloneNode(true);
  thumbnailElement.querySelector('.picture__img').src = url;
  thumbnailElement.querySelector('.picture__img').alt = description;
  thumbnailElement.querySelector('.picture__likes').textContent = likes;
  thumbnailElement.querySelector('.picture__comments').textContent = comments.message.length;
  thumbnailsFragment.appendChild(thumbnailElement);
});

picturesContainer.appendChild(thumbnailsFragment);

export {picturesContainer};
