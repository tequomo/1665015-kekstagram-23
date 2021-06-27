import './data.js';

const bigPhotoContainer = document.querySelector('.big-picture');
const bigPhotoImage = bigPhotoContainer.querySelector('.big-picture__img');
const likesCount = bigPhotoContainer.querySelector('.likes-count');
const commentsCount = bigPhotoContainer.querySelector('.comments-count');
const socialСomments = bigPhotoContainer.querySelector('.social__comments');
const socialCaption = bigPhotoContainer.querySelector('.social__caption');
const socialCommentCount = bigPhotoContainer.querySelector('.social__comment-count');
const commentsLoader = bigPhotoContainer.querySelector('.comments-loader');
const bigPhotoCloseButton = bigPhotoContainer.querySelector('#picture-cancel');

const isEscEvent = (evt) => evt.key === 'Escape' || evt.key === 'Esc';
// const isEnterEvent = (evt) => evt.key === 'Enter';


const openPhotoPreview = () => {
  bigPhotoContainer.classList.remove('hidden');
  document.body.classList.add('modal-open');
};
const closePhotoPreview = () => {
  bigPhotoContainer.classList.add('hidden');
  document.body.classList.remove('modal-open');
  // bigPhotoCloseButton.removeEventListener('click', onClickCloseButton);
  // document.removeEventListener('keydown', onPressEsc);
};

const onClickCloseButton = () => closePhotoPreview();

const onPressEsc = (evt) => {
  if (isEscEvent(evt)) {
    evt.preventDefault();
    closePhotoPreview();
  }
};

// const onPressEnter = (evt) => {
//   if (isEnterEvent(evt)) {
//     evt.preventDefault();
//     closePhotoPreview();
//   }
// };

const generateComments = (dataSource) => {
  const comments = document.createDocumentFragment();
  dataSource.forEach((element) => {
    const commentTemplate = document.createElement('li');
    commentTemplate.classList.add('social__comment');
    const userImage = document.createElement('img');
    userImage.classList.add('social__picture');
    userImage.src = element.avatar;
    userImage.alt = element.name;
    userImage.width = 35;
    userImage.height = 35;
    commentTemplate.appendChild(userImage);
    const userComment = document.createElement('p');
    userComment.classList.add('social__text');
    userComment.textContent = element.message;
    commentTemplate.appendChild(userComment);
    comments.appendChild(commentTemplate);
  });
  return comments;
};

const showFullSizePhoto = (thumbnail) => {
  openPhotoPreview();
  bigPhotoImage.children[0].src = thumbnail.url;
  likesCount.textContent = thumbnail.likes;
  commentsCount.textContent = thumbnail.comments.length;
  socialCaption.textContent = thumbnail.description;
  socialСomments.innerHTML = '';
  socialСomments.appendChild(generateComments(thumbnail.comments));
  socialCommentCount.classList.add('hidden');
  commentsLoader.classList.add('hidden');

  bigPhotoCloseButton.addEventListener('click', onClickCloseButton);
  // bigPhotoCloseButton.addEventListener('keydown', onPressEnter);
  document.addEventListener('keydown', onPressEsc);
};

export { showFullSizePhoto };
