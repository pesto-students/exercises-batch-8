
function isPalindrome(arg) {
  let value = arg.toString();
  value = value.replace(/[^a-zA-Z0-9]/g, '').toLowerCase();
  for (let i = 0; i < value.length / 2; i += 1) {
    const currentCharacterIndex = i;
    const lastCharacterIndex = value.length - 1 - currentCharacterIndex;
    if (value.charAt(currentCharacterIndex) !== value.charAt(lastCharacterIndex)) {
      return false;
    }
  }
  return true;
}
export {
  isPalindrome,
};
