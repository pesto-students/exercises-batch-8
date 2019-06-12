
function reverseString(stringToReverse) {
  let reversedString = '';

  for (let index = stringToReverse.length - 1; index >= 0; index -= 1) {
    reversedString += stringToReverse[index];
  }

  return reversedString;
}

export {
  reverseString,
};
