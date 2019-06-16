
function isPalindrome(arg) {
  if (typeof arg === 'number') {
    return isPalindrome(String(arg));
  }
  const clean = arg.replace(/[^a-z0-9]/gi, '').toLowerCase();
  return clean === clean.split('').reverse().join('');
}

export {
  isPalindrome,
};
