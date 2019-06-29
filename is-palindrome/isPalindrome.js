
function isPalindrome(mayBePalindrome) {
  const stringForm = String(mayBePalindrome);
  const charsToBeTested = stringForm.replace(/[^a-zA-Z0-9]/g, '').toLowerCase();
  const chars = charsToBeTested.split('');
  const reversed = chars.reverse().join('');
  // isPalindrome
  return charsToBeTested === reversed;
}

export {
  isPalindrome,
};
