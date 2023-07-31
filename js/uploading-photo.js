const FILE_TYPES = ['jpg', 'jpeg', 'png'];

const uploadInput = document.querySelector('.img-upload__input');
const imgPreview = document.querySelector('.img-upload__preview img');

uploadInput.addEventListener('change', () => {
  const file = uploadInput.files[0];
  const fileName = file.name.toLowerCase();

  const matches = FILE_TYPES.some((it) => fileName.endsWith(it));
  if(matches) {
    imgPreview.src = URL.createObjectURL(file);
  }
});
