
function reverseString(string) {
  const chars = string.split('');
  const reversed = [];
  for (let i = chars.length - 1; i >= 0; i -= 1) {
    reversed.push(chars[i]);
  }
  return reversed.join('');
}

export {
  reverseString,
};
