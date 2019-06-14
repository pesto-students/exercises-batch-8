/* eslint-disable array-callback-return */

function getNumberOfDeletions(string) {
  let timesToDelete = 0;
  for (let i = 1; i < string.length; i += 1) {
    if (string.charAt(i) === string.charAt(i - 1)) {
      string.slice(i, i + 1);
      timesToDelete += 1;
    }
  }
  return timesToDelete;
}

function alternatingCharacters(stringArray) {
  const numberOfDeletionsArray = stringArray.map(string => getNumberOfDeletions(string));
  return numberOfDeletionsArray;
}

export {
  alternatingCharacters,
};
