
function abbreviateString(str) {
  const isValidString = !typeof (str) === 'string';
  if (isValidString) {
    throw Error('Invalid Parameter');
  }
  const words = str.split(' ');
  const firstWord = words[0];
  const lastWord = words[words.length - 1];
  return `${firstWord} ${lastWord.charAt(0).toUpperCase()}.`;
}

export {
  abbreviateString,
};
