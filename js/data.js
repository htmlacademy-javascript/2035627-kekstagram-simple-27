import { getRandomNumber } from './util.js';

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
const generatePostData = (index) => ({
  id: index,
  url: `photos/${index}.jpg`,
  description: RANDOM_COMMENTS[getRandomNumber(0, RANDOM_COMMENTS.length)],
  likes: getRandomNumber(15, 200),
  comments: getRandomNumber(0, 200),
});

generatePostData();

//Создание массива из N элементов
const createPost = () => {
  const post = Array.from({ length: ELEMENTS_NUMBER }, (_, index) =>
    generatePostData(index + 1)
  );
  return post;
};

export { createPost };
