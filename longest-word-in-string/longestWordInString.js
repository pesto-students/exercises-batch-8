
function longestWordInString(string) {
  let maxLength = -1;
  string.split(' ').map((word) => {
    if (maxLength < word.length) {
      maxLength = word.length;
    }
    return null;
  });
  return maxLength;
}

export {
  longestWordInString,
};
