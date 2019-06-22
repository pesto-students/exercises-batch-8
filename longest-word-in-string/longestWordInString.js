function longestWordInString(string) {
  const words = string.split("");
  return words.reduce((acc, word) => {
    if (word.length > acc) {
      return word.length;
    }
    return acc;
  }, 0);
}

export { longestWordInString };
