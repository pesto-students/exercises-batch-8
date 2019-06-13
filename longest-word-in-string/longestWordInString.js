
function longestWordInString(string) {
  const wordsArray = string.split(' ');
  let longestLength = 0;
  wordsArray.forEach((word) => {
    const { length } = word;
    if (longestLength < length) {
      longestLength = length;
    }
  });
  return longestLength;
}

export {
  longestWordInString,
};
