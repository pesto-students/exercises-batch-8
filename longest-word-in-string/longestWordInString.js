
function longestWordInString(superString) {
  const words = superString.split(' ');
  return words.reduce((largestWordAcc, word) => {
    if (word.length > largestWordAcc.length) {
      return word;
    }
    return largestWordAcc;
  },
  '').length;
}

export {
  longestWordInString,
};
