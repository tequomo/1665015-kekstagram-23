import { posts } from './data.js';

const thumbnailTemplate = document.querySelector('#picture').content.querySelector('.picture');
const photoContainer = document.querySelector('.pictures');

const generateThumbs = (postsCollection) => {
  const thumbnailAlbum = document.createDocumentFragment();

  postsCollection.forEach((post) => {
    const newThumb = thumbnailTemplate.cloneNode(true);
    newThumb.querySelector('.picture__img').src = post.url;
    newThumb.querySelector('.picture__likes').textContent = post.likes;
    newThumb.querySelector('.picture__comments').textContent = post.comments.length;
    thumbnailAlbum.appendChild(newThumb);
  });

  photoContainer.appendChild(thumbnailAlbum);
};

generateThumbs(posts);

export {photoContainer};
