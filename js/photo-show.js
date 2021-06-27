import { showFullSizePhoto } from './full-size-photo.js';
import { photoContainer } from './thumbnail.js';
import { posts } from './data.js';

photoContainer.addEventListener('click', (event) => {
  if (event.target.matches('img')) {
    const thumbnailIndex = Number(event.target.src.split('/').pop().split('.')[0]) - 1;
    showFullSizePhoto(posts[thumbnailIndex]);
  }
});
