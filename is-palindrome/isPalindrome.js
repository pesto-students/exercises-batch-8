
function isPalindrome(args) {
  const filterRegEx = /[a-zA-Z0-9]/g;
  const string = args.toString();
  const filteredStringArray = string.toLowerCase().match(filterRegEx);
  const reverseStringArray = [...filteredStringArray].reverse();
  const filteredString = filteredStringArray.join('');
  const reverseString = reverseStringArray.join('');
  return filteredString === reverseString;
}

export {
  isPalindrome,
};
