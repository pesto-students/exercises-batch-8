function longestWordInString(str) {
  return Math.max(...str.split(' ').map(string => string.length));
}

export {
  longestWordInString,
};
