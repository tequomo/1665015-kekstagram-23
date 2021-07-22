import { uploadForm } from './image-upload.js';
import { debounce } from './util.js';

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
const CHECK_DELAY = 500;

const hashtagField = uploadForm.querySelector('.text__hashtags');

// const validateHashtag = (value) => {

//   let alertString = '';
//   const re = /^#[A-Za-zА-Яа-я0-9]{1,19}$/gi;
//   const reSpace = /\b#\b/;
//   // re.test('#хэштег'); // > true
//   if (/\s\s/.test(value)) {
//     value = value.replace( /  +/g, ' ' );
//   }
//   const hashtags = value.trim().toLowerCase().split([' ']);
//   console.log(`value=${  value}`);
//   if (!value || value === '') {
//     alertString = '';
//   }
//   console.log(`hashtags=${  hashtags}`);

//   hashtags.forEach((tag) => {
//     // console.log(re.test(tag));
//     // console.log(hashtags);
//     // alertString += (re.test(tag)) ? '' : (reSpace.test(tag) ? 'Поставьте пробел между хештегами\n' : 'Вы ввели недопустимый хештег\n');
//     if (re.test(tag) || tag === '') {
//       // console.log(re.test(tag));
//       alertString = '';
//     }
//     // if (reSpace.test(tag)) {
//     //   alertString += 'Поставьте пробел между хештегами\n';
//     // }
//     alertString = 'Вы ввели недопустимый хештег\n';
//   });

//   if (hashtags.length > HASHTAG_COUNT) {
//     alertString += 'Вы превысили допустимое количество хештегов\n';
//   }

//   hashtagField.setCustomValidity(alertString);
//   hashtagField.reportValidity();
// };


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
    console.log(`value=${  value}`);
    const hashtags = value.trim().toLowerCase().split([' ']);
    const checkTag = (tag) => reHashtag.test(tag);
    const matchTag = (tag) => tag.match(reDoubleHash);

    if (!hashtags.every(checkTag)) {
      alertString += 'Вы ввели недопустимый хештег\n';
      if (hashtags.some(matchTag)) {
        alertString = 'Поставьте пробел между хештегами\n';
      }
    }

    if (new Set(hashtags).size !== hashtags.length) {
      const duplicate = hashtags.filter(((a) => (b) => a.has(b) || !a.add(b))(new Set));
      alertString += `Удалите дублирующийся тег ${  duplicate}`;
      console.log(duplicate);
    }

    if (hashtags.length > HASHTAG_COUNT) {
      alertString += 'Вы превысили допустимое количество хештегов\n';
    }
  }
  hashtagField.setCustomValidity(alertString);
  hashtagField.reportValidity();
};

hashtagField.addEventListener('input', debounce(() => {
  validateHashtag(hashtagField.value);
}, CHECK_DELAY));
