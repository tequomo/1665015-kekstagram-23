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

const openPopup = (node) => {
  node.classList.remove('hidden');
  document.body.classList.add('modal-open');
};
const closePopup = (node) => {
  node.classList.add('hidden');
  document.body.classList.remove('modal-open');
};

const isEscEvent = (evt) => evt.key === 'Escape' || evt.key === 'Esc';

export { getRandomInteger, getRandomLengthArray, checkMaxLength, openPopup, closePopup, isEscEvent };
