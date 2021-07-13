import { openPopup } from './util.js';

const uploadForm = document.querySelector('.img-upload__form');
const editPopup = uploadForm.querySelector('.img-upload__overlay');
// const photoChooser = offerForm.querySelector('.img-upload__start input[type="file"]');
const photoChooser = uploadForm.querySelector('#upload-file');
const photoContainer = uploadForm.querySelector('.img-upload__preview img');
const closeButton = uploadForm.querySelector('#upload-cancel');

const FILE_TYPES = ['gif', 'jpg', 'jpeg', 'png'];

const loadPhotoPreview = (photoSource, photoDestination) => {
  const file = photoSource.files[0];
  const fileName = file.name.toLowerCase();
  const fileTypeMatches = FILE_TYPES.some((ext) => ext === fileName.split('.').pop());
  if (fileTypeMatches) {
    const reader = new FileReader();
    reader.addEventListener('load', () => {
      photoDestination.src = reader.result;
      openPopup(editPopup);
    });
    reader.readAsDataURL(file);
  }
};

const onLoadPhoto = () => {
  loadPhotoPreview(photoChooser, photoContainer);
};

photoChooser.addEventListener('change', onLoadPhoto);
