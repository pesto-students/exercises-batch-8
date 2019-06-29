
function longestWordInString(text) {
  const words = text.split(' ');
  let maxLength = 0;
  for (const word of words) {
    if (word.length > maxLength) {
      maxLength = word.length;
    }
  }
  return maxLength;
}

export {
  longestWordInString,
};
