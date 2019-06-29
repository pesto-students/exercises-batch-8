function longestWordInString(string) {
  const words = string.split(' ');
  const result = {
    length: 0,
  };
  words.forEach((word) => {
    if (word.length > result.length) {
      result.length = word.length;
    }
  });

  return result.length;
}
export { longestWordInString };
