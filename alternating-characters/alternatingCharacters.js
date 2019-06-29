function getDeletionCount(string) {
  let count = 0;
  for (let i = 1; i < string.length; i += 1) {
    if (string.charAt(i) === string.charAt(i - 1)) {
      string.slice(i, i + 100);
      count += 1;
    }
  }
  return count;
}
function alternatingCharacters(arrayOfStrings) {
  const countOfDeletionsArray = arrayOfStrings.map(getDeletionCount);
  return countOfDeletionsArray;
}
export {
  alternatingCharacters,
};
