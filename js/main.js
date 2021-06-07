const getRandomIntInclusive = (min, max) => { // https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Global_Objects/Math/random
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
};

const getRandomInteger = (minValue, maxValue) => {
  minValue = (minValue < 0) ? Math.abs(minValue) : minValue;
  maxValue = (maxValue < 0) ? Math.abs(maxValue) : maxValue;

  maxValue = (minValue > maxValue) ? [minValue, minValue = maxValue][0] : maxValue;

  return (minValue === maxValue) ? Math.ceil(minValue) : getRandomIntInclusive(minValue, maxValue);
};

const checkMaxLength = (message, maxLength) => message.length <= maxLength;

checkMaxLength('кекстаграм', 10);


const POSTS_COUNT = 25;
const MESSAGE_PHRASE_COUNT = 2;
const LIKES_COUNT_MIN = 15;
const LIKES_COUNT_MAX = 200;
const COMMENT_ID_MIN = 50;
const COMMENT_ID_MAX = 240;
const AVATAR_COUNT_MAX = 6;
const COMMENT_COUNT_MIN = 1;
const COMMENT_COUNT_MAX = 4;

const NAMES = [
  'Иван',
  'Мария',
  'Йонду',
  'Ник',
  'Спиридон',
  'Людмила',
  'Эльза',
  'Анна-Николь',
  'Майкл',
  'Арчибальд',
];

const SURNAMES = [
  'Островец',
  'Де Ла Вега',
  'Уивинг',
  'Блумквист',
  'Боготян',
  'Кравченко',
  'Удонта',
  'Вареник',
  'Йоулупукки',
  'Мосс',
];

const DESCRIPTIONS = [
  'Это фото отражает состояние моей души!',
  'Чувственность и артистизм',
  'Умиротворение',
  'Ничего лучше я сегодня уже не увижу ))',
  'Глубина цвета поражает!',
  'Проня Прокоповна имеет вкус!',
  'Фотография, непохожая на все остальные',
  'Здесь чего-то не хватает',
  'Просто картинка с глубоким смыслом',
  'Куда уехал цирк, он был ещё вчера?',
];

const MESSAGES = [
  'Всё отлично!',
  'В целом всё неплохо. Но не всё.',
  'Когда вы делаете фотографию, хорошо бы убирать палец из кадра. В конце концов это просто непрофессионально.',
  'Моя бабушка случайно чихнула с фотоаппаратом в руках и у неё получилась фотография лучше.',
  'Я поскользнулся на банановой кожуре и уронил фотоаппарат на кота и у меня получилась фотография лучше.',
  'Лица у людей на фотке перекошены, как будто их избивают. Как можно было поймать такой неудачный момент?!',
];


const shuffleArray = (array) => {
  for (let currentIndex = array.length - 1; currentIndex > 0; currentIndex--) {
    const randomIndex = Math.floor(Math.random() * (currentIndex + 1));
    [array[currentIndex], array[randomIndex]] = [array[randomIndex], array[currentIndex]];
  }
};

const getRandomLengthArray = (sourceArray, maxLength) => {
  shuffleArray(sourceArray);
  return sourceArray.slice(0, getRandomInteger(1, maxLength));
};

const createPosts = (currentIndex) => ({
  id: +(currentIndex + 1),
  url: `photos/${currentIndex + 1}.jpg`,
  description: DESCRIPTIONS[getRandomInteger(0, DESCRIPTIONS.length - 1)],
  likes: getRandomInteger(LIKES_COUNT_MIN, LIKES_COUNT_MAX),
  comments: new Array(getRandomInteger(COMMENT_COUNT_MIN, COMMENT_COUNT_MAX)).fill(null).map(() => ({
    id: getRandomInteger(COMMENT_ID_MIN, COMMENT_ID_MAX),
    avatar: `img/avatar-${getRandomInteger(1, AVATAR_COUNT_MAX)}.svg`,
    message: getRandomLengthArray(MESSAGES, MESSAGE_PHRASE_COUNT).join(' '),
    name: `${NAMES[getRandomInteger(0, NAMES.length - 1)]} ${SURNAMES[getRandomInteger(0, SURNAMES.length - 1)]}`,
  })),
});

const posts = new Array(POSTS_COUNT).fill(null).map((_, index) => createPosts(index));

posts;
