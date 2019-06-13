
function isPalindrome(string) {
  const cleanString = String(string).replace(/[^a-zA-Z0-9]/g, '').toLowerCase();
  for (let i = 0; i < cleanString.length / 2; i += 1) {
    if (cleanString[i] !== cleanString[cleanString.length - 1 - i]) {
      return false;
    }
  }
  return true;
}

export {
  isPalindrome,
};
