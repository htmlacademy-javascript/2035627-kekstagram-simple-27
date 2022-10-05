//Функция для проверки длины комментария
/**
 * Проверка максимальной длины строки
 * @param {string} comment Входная строка
 * @param {number} maxLength Максимальная длина
 * @returns {boolean} Подходит ли по длине
 */
const checkCommentLength = (comment, maxLength) => comment.length < maxLength;
checkCommentLength(180, 120);

//Функция для выбора рандомного числа из заданного диапазона
/*
 * Возвращает случайное число в заданном диапазоне, но ещё проверяет что числа положительные и можно передовать в любом порядке и числа с плавающей точкой
 * @param {number} min Положительное число
 * @param {number} max Положительное число
 * @returns {number} Случайное в заданном промежутке включительно
 */
function getRandomNumber(a, b) {
  if (a < 0 || b < 0) {
    return NaN;
  }
  const min = Math.ceil(a);
  const max = Math.floor(b);
  const number = Math.random() * (max + 1 - min) + min;
  return Math.floor(number);
}
getRandomNumber(0, 10);
