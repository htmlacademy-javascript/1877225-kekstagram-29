const fileTypes = ['jpg', 'jpeg', 'png'];

const uploadInput = document.querySelector('.img-upload__input');
const imgPreview = document.querySelector('.img-upload__preview img');

uploadInput.addEventListener('change', () => {
  const file = uploadInput.files[0];
  const fileName = file.name.toLowerCase();

  const matches = fileTypes.some((it) => fileName.endsWith(it));
  if(matches) {
    imgPreview.src = URL.createObjectURL(file);
  }
});
