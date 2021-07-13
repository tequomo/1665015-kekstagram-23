import { uploadForm } from './image-upload.js';

// const isValidNewPicture = (curFile) => {
//   const formats = ['image/jpeg', 'image/jpeg', 'image/png'];
//   let isValid = true;

//   if (!formats.includes(curFile.type)) {
//     newImgInputElement.setCustomValidity('Недопустимый тип изображения');
//     isValid = false;
//   }
//   else {
//     newImgInputElement.setCustomValidity('');
//   }
//   newImgInputElement.reportValidity();
//   return isValid;
// };

const MIN_HASHTAG_LENGTH = 1;
const MAX_HASHTAG_LENGTH = 20;
const HASHTAG_COUNT = 5;

const hashtagInput = uploadForm.querySelector('.text__hashtags');

const validateHashtag = (value) => {
  const re = /^#[A-Za-zА-Яа-я0-9]{1,19}$/;
  // re.test('#хэштег'); // > true
  const hashtags = value.toLowerCase().split([' ']);
  if(hashtags.length >= HASHTAG_COUNT) {
    alertString = '';
  }

  hashtags.forEach((item) => {

  });
  console.log(hashtags);
};


hashtagInput.addEventListener('input', () => {
  validateHashtag(hashtagInput.value);
});
