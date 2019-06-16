function isValidChar(char) {
  const alphaNumericChar = /[a-zA-Z0-9]/;
  return char.match(alphaNumericChar);
}

function isPalindrome(arg) {
  const strArr = arg.toString().toLowerCase().split('');
  const filteredStrArr = strArr.filter(isValidChar);
  const revFilteredStrArr = [...filteredStrArr].reverse();
  return revFilteredStrArr.join('') === filteredStrArr.join('');
}

export {
  isPalindrome,
};
