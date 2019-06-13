
function isPalindrome(arg) {
  let str = String(arg);
  const filterSymbolsRegEx = /[^a-zA-Z0-9]/g;
  str = str.replace(filterSymbolsRegEx, '');
  str = str.toLowerCase();
  for (let i = 0; i < str.length / 2; i += 1) {
    const lastCharIndex = str.length - 1 - i;
    if (str.charAt(i) !== str.charAt(lastCharIndex)) {
      return false;
    }
  }
  return true;
}

export {
  isPalindrome,
};
