function getRandomIntInclusive(min, max) { // https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Global_Objects/Math/random
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

const getRandomInteger = (minValue, maxValue) => {
  minValue = (minValue < 0) ? Math.abs(minValue) : minValue;
  maxValue = (maxValue < 0) ? Math.abs(maxValue) : maxValue;

  maxValue = (minValue > maxValue) ? [minValue, minValue = maxValue][0] : maxValue;

  return (minValue === maxValue) ? Math.ceil(minValue) : getRandomIntInclusive(minValue, maxValue);
};

getRandomInteger(8, 15);

const checkMaxLength = (message, maxLength) => message.length <= maxLength;

checkMaxLength('кекстаграм', 10);


const POSTS_COUNT = 25;
const MESSAGE_PHRASE_COUNT = 2;

const NAMES = [
  'Иван',
  'Мария',
];

const SURNAMES = [
  'Островец',
  'Де Ла Вега',
  'Уивинг',
];

const DESCRIPTIONS = [
  'Это фото отражает состояние моей души!',
  'Чувственность и артистизм',
  'Умиротворение',
];

const MESSAGES = [
  'Всё отлично!',
  'В целом всё неплохо. Но не всё.',
  'Когда вы делаете фотографию, хорошо бы убирать палец из кадра. В конце концов это просто непрофессионально.',
  'Моя бабушка случайно чихнула с фотоаппаратом в руках и у неё получилась фотография лучше.',
  'Я поскользнулся на банановой кожуре и уронил фотоаппарат на кота и у меня получилась фотография лучше.',
  'Лица у людей на фотке перекошены, как будто их избивают. Как можно было поймать такой неудачный момент?!',
];


function shuffleArray(array) {
  for (let currentIndex = array.length - 1; currentIndex > 0; currentIndex--) {
    const randomIndex = Math.floor(Math.random() * (currentIndex + 1));
    [array[currentIndex], array[randomIndex]] = [array[randomIndex], array[currentIndex]];
  }
}

function getRandomLengthArray(sourceArray, maxLength) {
  shuffleArray(sourceArray);
  return sourceArray.slice(0, getRandomInteger(1, maxLength));
}

const createPosts = (currentIndex) => ({
  id: +(currentIndex + 1),
  url: `photos/${currentIndex + 1}.jpg`,
  description: DESCRIPTIONS[getRandomInteger(0, DESCRIPTIONS.length - 1)],
  likes: getRandomInteger(15, 200),
  comments: {
    id: getRandomInteger(50, 240),
    avatar: `img/avatar-${getRandomInteger(1, 6)}.svg`,
    message: getRandomLengthArray(MESSAGES, MESSAGE_PHRASE_COUNT).join(' '),
    name: `${NAMES[getRandomInteger(0, NAMES.length - 1)]} ${SURNAMES[getRandomInteger(0, SURNAMES.length - 1)]}`,
  },
});
const posts = new Array(POSTS_COUNT).fill(null).map((_, index) => createPosts(index));

posts;
