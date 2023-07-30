import { getImg } from './thumbnails.js';
import { checkValidForm } from './user-form.js';
import { scalingImage } from './img-scaling.js';
import { changeEffects } from './filters.js';
import { getData } from './api.js';
import { showAlert } from './util.js';
import { closeUploadOverlay } from './user-form.js';

scalingImage();
changeEffects();

getData()
  .then((img) => {
    getImg(img);
  })
  .catch(
    (err) => {
      showAlert(err.message);
    }
  );

checkValidForm(closeUploadOverlay);
