
function reverseString(str) {
  return str.split('').reduce((reversed, char) => char + reversed, '');
}

export {
  reverseString,
};
