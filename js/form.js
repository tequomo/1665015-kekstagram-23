import { uploadForm } from './image-upload.js';
import { throttle } from './util.js';

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
const CHECK_DELAY = 1000;

const hashtagField = uploadForm.querySelector('.text__hashtags');

const validateHashtag = (value) => {

  let alertString = '';
  const re = /^#[A-Za-zА-Яа-я0-9]{1,19}$/gi;
  const reSpace = /\b#\b/;
  // re.test('#хэштег'); // > true
  const hashtags = value.toLowerCase().split([' ']);

  if(hashtags.length > HASHTAG_COUNT) {
    alertString = 'Вы превысили допустимое количество хештегов\n';
  }

  hashtags.forEach((tag) => {
    // console.log(re.test(tag));
    alertString += (re.test(tag)) ? '' : (reSpace.test(tag) ? 'Поставьте пробел между хештегами\n' : 'Вы ввели недопустимый хештег\n');
  });

  hashtagField.setCustomValidity(alertString);
  hashtagField.reportValidity();
};


hashtagField.addEventListener('input', throttle(() => {
  validateHashtag(hashtagField.value);
}, CHECK_DELAY));
