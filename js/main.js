import { getImg } from './thumbnails.js';
import { checkValidForm } from './user-form.js';
import { scaleImage } from './img-scaling.js';
import { changeEffects } from './filters.js';
import { getData } from './api.js';
import { debounce, showAlert } from './util.js';
import { closeUploadOverlay } from './user-form.js';
import { initializeFilter, getFilteredPictures } from './filtering-user-posts.js';
import './uploading-photo.js';

scaleImage();
changeEffects();

try {
  const data = await getData();
  const debouncedGallery = debounce(getImg);
  initializeFilter(data, debouncedGallery);
  getImg(getFilteredPictures());
} catch (err) {
  showAlert(err.message);
}

checkValidForm(closeUploadOverlay);
