import { getImg } from './thumbnails.js';
import { checkValidForm } from './user-form.js';
import { scalingImage } from './img-scaling.js';
import { changeEffects } from './filters.js';
import { getData } from './api.js';
import { debounce, showAlert } from './util.js';
import { closeUploadOverlay } from './user-form.js';
import { init as initFilter, getFilteredPictures } from './filtering-user-posts.js';
import './uploading-photo.js';
const filters = document.querySelector('.img-filters');

scalingImage();
changeEffects();

getData()
  .then((img) => {
    getImg(img);
    getFilteredPictures();
  })
  .then(filters.classList.remove('img-filters--inactive'))
  .catch(
    (err) => {
      showAlert(err.message);
    }
  );

try {
  const data = await getData();
  const debouncedGallery = debounce(getImg);
  initFilter(data, debouncedGallery);
  getImg(getFilteredPictures());
} catch (err) {
  showAlert(err.message);
}

checkValidForm(closeUploadOverlay);
