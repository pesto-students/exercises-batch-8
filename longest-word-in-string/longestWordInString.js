
/* eslint-disable */

function longestWordInString(input) {
  return input.split(' ')
    .reduce((acc, currentWord) => currentWord.length > acc ? currentWord.length : acc, 0);
}

export {
  longestWordInString,
};
