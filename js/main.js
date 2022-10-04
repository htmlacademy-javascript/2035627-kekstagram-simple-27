const checkCommentLength = (comment, maxLength) => comment.length < maxLength;
checkCommentLength(180, 120);

function getRandomNumber(min, max) {
  const number = Math.random() * (max + 1 - min) + min;
  return Math.round(number);
}
getRandomNumber(0, 10);
