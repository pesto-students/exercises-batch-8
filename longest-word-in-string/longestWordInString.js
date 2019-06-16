
const lengthOfWordsInString = string => string.split(' ').map(word => word.length);
function longestWordInString(string) {
  return Math.max(...lengthOfWordsInString(string));
}

export {
  longestWordInString,
};
