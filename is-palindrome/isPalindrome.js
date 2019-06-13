
function isPalindrome(str) {
  const string = str.toString();
  const filteredString = string.toLowerCase().replace(/[\W_]/g, '');
  const reversedString = filteredString
    .split('')
    .reverse()
    .join('');

  return filteredString === reversedString;
}

export {
  isPalindrome,
};
