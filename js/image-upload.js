import { closePopup, isEscEvent, openPopup } from './util.js';


const uploadForm = document.querySelector('.img-upload__form');
const editPhotoTool = uploadForm.querySelector('.img-upload__overlay');
// const photoChooser = offerForm.querySelector('.img-upload__start input[type="file"]');
const photoChooser = uploadForm.querySelector('#upload-file');
const photoContainer = uploadForm.querySelector('.img-upload__preview img');
const photoToolCloseButton = uploadForm.querySelector('#upload-cancel');

const FILE_TYPES = ['gif', 'jpg', 'jpeg', 'png'];
const DEFAULT_PHOTO = 'img/upload-default-image.jpg';

const resetPhoto = () => {
  photoContainer.src = DEFAULT_PHOTO;
};

function onClickPhotoToolButton (evt) {
  evt.preventDefault();
  closePopup(editPhotoTool);
  resetPhoto();
  document.removeEventListener('keydown', onEscPhotoTool);
  photoToolCloseButton.removeEventListener('click', onClickPhotoToolButton);
}

function onEscPhotoTool (evt) {
  if (isEscEvent(evt)) {
    closePopup(editPhotoTool);
    resetPhoto();
    document.removeEventListener('keydown', onEscPhotoTool);
    photoToolCloseButton.removeEventListener('click', onClickPhotoToolButton);
  }
}

const loadPhotoPreview = (photoSource, photoDestination) => {
  const file = photoSource.files[0];
  const fileName = file.name.toLowerCase();
  const fileTypeMatches = FILE_TYPES.some((ext) => ext === fileName.split('.').pop());
  let alertString = '';
  if (fileTypeMatches) {
    const reader = new FileReader();
    reader.addEventListener('load', () => {
      photoDestination.src = reader.result;
      openPopup(editPhotoTool);
      document.addEventListener('keydown', onEscPhotoTool);
      photoToolCloseButton.addEventListener('click', onClickPhotoToolButton);
    });
    reader.readAsDataURL(file);
    alertString = '';
  }
  else {
    alertString = 'Недопустимый формат изображения';
  }
  photoSource.setCustomValidity(alertString);
  photoSource.reportValidity();
};

const onSelectPhoto = () => {
  loadPhotoPreview(photoChooser, photoContainer);
};

photoChooser.addEventListener('change', onSelectPhoto);

export { uploadForm };
