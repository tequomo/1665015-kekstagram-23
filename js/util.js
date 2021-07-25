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

// Функция взята из интернета и доработана
// Источник - https://www.freecodecamp.org/news/javascript-debounce-example

const debounce = (callback, timeoutDelay = 500) => {
  let timeoutId;

  return (...rest) => {
    clearTimeout(timeoutId);
    timeoutId = setTimeout(() => callback.apply(this, rest), timeoutDelay);
  };
};

function throttle (callback, delayBetweenFrames) {
  // Используем замыкания, чтобы время "последнего кадра" навсегда приклеилось
  // к возвращаемой функции с условием, тогда мы его сможем перезаписывать
  let lastTime = 0;

  return (...rest) => {
    // Получаем текущую дату в миллисекундах,
    // чтобы можно было в дальнейшем
    // вычислять разницу между кадрами
    const now = new Date();

    // Если время между кадрами больше задержки,
    // вызываем наш колбэк и перезаписываем lastTime
    // временем "последнего кадра"
    if (now - lastTime >= delayBetweenFrames) {
      callback.apply(this, rest);
      lastTime = now;
    }
  };
}

const isEscEvent = (evt) => evt.key === 'Escape' || evt.key === 'Esc';
const onFocusNode = (node) =>  document.activeElement === node;

export { getRandomInteger, getRandomLengthArray, checkMaxLength, openPopup, closePopup, isEscEvent, debounce, throttle, onFocusNode };
