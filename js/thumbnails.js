import { thumbnailClickHandler } from './full-size-photos.js';

const picturesContainer = document.querySelector('.pictures');
const pictureTemplate = document.querySelector('#picture').content.querySelector('.picture');
const thumbnailsFragment = document.createDocumentFragment();

const getImg = (img) => {
  img.forEach(({url, description, likes, comments}) => {
    const thumbnailElement = pictureTemplate.cloneNode(true);
    thumbnailElement.querySelector('.picture__img').src = url;
    thumbnailElement.querySelector('.picture__img').alt = description;
    thumbnailElement.querySelector('.picture__likes').textContent = likes;
    thumbnailElement.querySelector('.picture__comments').textContent = comments.length;
    thumbnailElement.addEventListener('click', () => thumbnailClickHandler(url, description, likes, comments));
    thumbnailsFragment.appendChild(thumbnailElement);
  });
  picturesContainer.appendChild(thumbnailsFragment);
};

export {getImg};
