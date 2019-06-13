
function reverseString(str) {
  const stringArray = str.split('');
  return stringArray.reduce((acc, char, index, chars) => acc + chars[chars.length - 1 - index], '');
}

export {
  reverseString,
};
