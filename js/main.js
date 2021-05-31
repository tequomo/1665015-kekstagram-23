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
