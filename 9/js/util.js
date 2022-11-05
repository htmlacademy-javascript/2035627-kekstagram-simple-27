//Функция для проверки длины комментария
/**
 * Проверка максимальной длины строки
 * @param {string} comment Входная строка
 * @param {number} maxLength Максимальная длина
 * @returns {boolean} Подходит ли по длине
 */

const checkCommentLength = (comment, maxLength) => comment.length < maxLength;
checkCommentLength('hello world', 140);

//Функция для выбора рандомного числа из заданного диапазона
/**
 * Возвращает случайное число в заданном диапазоне, но ещё проверяет что числа положительные и можно передовать в любом порядке и числа с плавающей точкой
 * @param {number} min Положительное число
 * @param {number} max Положительное число
 * @returns {number} Случайное в заданном промежутке включительно
 */
const getRandomNumber = (a, b) => {
  if (a < 0 || b < 0) {
    return NaN;
  }
  const min = Math.ceil(Math.min(a, b));
  const max = Math.floor(Math.max(a, b));
  const number = Math.random() * (max + 1 - min) + min;
  return Math.floor(number);
};

//Функция для выбора рандомного элемента из заданного массива
/**
 * @param {Object[]} elements Переданный массив
 */
const getRandomElement = (elements) =>
  elements[getRandomNumber(0, elements.length)];

//Функция для проверки нажата ли клавиша ESC
const isEscapeKey = (evt) => evt.key === 'Escape';

//Функция удаляющая последний знак у строки
const removeLastSymbol = (str) => str.slice(0, -1);

export {
  checkCommentLength,
  getRandomNumber,
  getRandomElement,
  isEscapeKey,
  removeLastSymbol,
};
