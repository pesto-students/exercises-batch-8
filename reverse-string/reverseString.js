
function reverseString(string) {
  let reversedString = '';
  // eslint-disable-next-line prefer-const
  for (let char of string) {
    reversedString = char + reversedString;
  }
  return reversedString;
}

export {
  reverseString,
};
