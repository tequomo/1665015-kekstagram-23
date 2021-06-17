import {getPostsArray, POSTS_COUNT} from './data.js';

const thumbnailTemplate = document.querySelector('#picture').content.querySelector('.picture');
const photoContainer = document.querySelector('.pictures');

const generateThumbs = function (postsCollection) {
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

const posts = getPostsArray(POSTS_COUNT);

generateThumbs(posts);
