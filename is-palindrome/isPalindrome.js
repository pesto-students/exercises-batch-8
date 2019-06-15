const NON_ALPHANUMERIC_REGEX = /[^0-9a-z]/gi;

function getLowerCaseAlphaNumericString(input) {
  const lowercaseAlphaNumericString = String(input)
    .replace(NON_ALPHANUMERIC_REGEX, '')
    .toLowerCase();
  return lowercaseAlphaNumericString;
}

function isPalindrome(input) {
  const lowercaseAlphaNumericString = getLowerCaseAlphaNumericString(input);
  return lowercaseAlphaNumericString
    .split('')
    .reduce((acc, character, index, string) => {
      if (acc === false) {
        return false;
      }
      if (string[index] !== string[string.length - index - 1]) {
        return false;
      }
      return true;
    }, true);
}

export {
  isPalindrome,
};
