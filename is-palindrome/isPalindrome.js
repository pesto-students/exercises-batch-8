
function isPalindrome(arg) {
  let str = String(arg);
  str = str.replace(/[^a-zA-Z0-9]/g, '');
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
