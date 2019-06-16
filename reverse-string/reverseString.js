
function reverseString(string) {
  return string.split('')
    // eslint-disable-next-line arrow-body-style
    .reduce((result, char) => {
      return char + result;
    }, '');
}

export {
  reverseString,
};
