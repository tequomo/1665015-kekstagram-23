import { posts } from './data.js';

const bigPhoto = document.querySelector('.big-picture');

const showFullSizePhoto = function () {
  bigPhoto.classList.remove('hidden');

};

showFullSizePhoto(posts);
