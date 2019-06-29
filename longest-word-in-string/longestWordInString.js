
function longestWordInString(stringToTest) {
  const wordsInGivenString = stringToTest.split(' ');
  const wordLengthsList = wordsInGivenString.map(word => word.length);
  const longestWordLength = Math.max.apply(null, wordLengthsList);

  return longestWordLength;
}

export {
  longestWordInString,
};
