
function reverseString(string) {
  const reversedStringCharacters = [];
  for (let i = string.length - 1; i >= 0; i -= 1) {
    reversedStringCharacters.push(string[i]);
  }
  return reversedStringCharacters.join('');
}

export {
  reverseString,
};
