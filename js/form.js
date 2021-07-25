import { uploadForm } from './image-upload.js';
// import { onFocusNode } from './util.js';
// import { debounce } from './util.js';

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

// const MIN_HASHTAG_LENGTH = 1;
const MAX_HASHTAG_LENGTH = 20;
const MAX_COMMENT_LENGTH = 140;
const HASHTAG_COUNT = 5;
// const CHECK_DELAY = 500;

const hashtagField = uploadForm.querySelector('.text__hashtags');
const commentField = uploadForm.querySelector('.text__description');


const validateHashtag = (value) => {

  let alertString = '';
  const reHashtag = /^#[A-Za-zА-Яа-я0-9]{1,19}$/i;
  const reDoubleHash = /\b#\b/;
  const reSpaceEnd = /\s\s/;
  const reSpaceReplace = /  +/g;
  const oneSpace = ' ';

  if (value) {

    if (reSpaceEnd.test(value)) {
      value = value.replace(reSpaceReplace, oneSpace);
    }
    const hashtags = value.trim().toLowerCase().split([' ']);
    const checkTag = (tag) => reHashtag.test(tag);
    const matchTag = (tag) => tag.match(reDoubleHash);
    const checkLengthTag = (tag) => tag.length >= MAX_HASHTAG_LENGTH;

    if (!hashtags.every(checkTag)) {
      alertString += 'Вы ввели недопустимый хештег\n';
      if (hashtags.some(matchTag)) {
        alertString = 'Поставьте пробел между хештегами\n';
      }
      if (hashtags.some(checkLengthTag)) {
        alertString = 'Вы превысили максимальную длину хештега\n';
      }
    }

    if (new Set(hashtags).size !== hashtags.length) {
      const duplicate = hashtags.filter(((a) => (b) => a.has(b) || !a.add(b))(new Set));
      alertString += `Удалите дублирующийся тег ${  duplicate}`;
    }

    if (hashtags.length > HASHTAG_COUNT) {
      alertString += 'Вы превысили допустимое количество хештегов\n';
    }
  }
  hashtagField.setCustomValidity(alertString);
  hashtagField.reportValidity();
};

const validateComment = (value) => {
  let alertString = '';

  if (value) {
    if (value.length >= MAX_COMMENT_LENGTH) {
      alertString = `Ваш комментарий содержит более ${  MAX_COMMENT_LENGTH} символов`;
    }
  }
  commentField.setCustomValidity(alertString);
  commentField.reportValidity();
};

const onInputHashtag = (event) => {
  validateHashtag(hashtagField.value);
  event.stopPropagation();
};

const onInputComent = (event) => {
  validateComment(commentField.value);
  event.stopPropagation();
};

hashtagField.addEventListener('input', onInputHashtag);
commentField.addEventListener('input', onInputComent);

export { hashtagField, commentField };
