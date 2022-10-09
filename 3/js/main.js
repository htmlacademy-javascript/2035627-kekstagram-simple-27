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
getRandomNumber(0, 10);

//Массив из случайных комментариев к фото
const RANDOM_COMMENTS = [
  'Всё отлично!',
  'В целом всё неплохо. Но не всё.',
  'Когда вы делаете фотографию, хорошо бы убирать палец из кадра. В конце концов это просто непрофессионально.',
  'Моя бабушка случайно чихнула с фотоаппаратом в руках и у неё получилась фотография лучше.',
  'Я поскользнулся на банановой кожуре и уронил фотоаппарат на кота и у меня получилась фотография лучше.',
  'Лица у людей на фотке перекошены, как будто их избивают. Как можно было поймать такой неудачный момент?!',
];

//Количество объектов в массиве к каждому посту
const ELEMENTS_NUMBER = 25;

//Функция для создания поста
const createPost = () => ({
  id: getRandomNumber(1, 25),
  url: `photos/${getRandomNumber(1, 25)}.jpg`,
  description: RANDOM_COMMENTS[getRandomNumber(0, RANDOM_COMMENTS.length - 1)],
  likes: getRandomNumber(15, 200),
  comments: getRandomNumber(0, 200),
});
createPost();

//Создание массива из N элементов
/* eslint-disable no-unused-vars */
const post = Array.from({ length: ELEMENTS_NUMBER }, createPost);
/* eslint-disable no-unused-vars */
