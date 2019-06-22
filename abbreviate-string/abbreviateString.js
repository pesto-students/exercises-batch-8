function abbreviateString(inputString) {
  if (typeof inputString !== 'string') {
    throw new Error('Input should be string');
  }
  const wordArray = inputString.split(' ');
  if (wordArray.length <= 1) {
    return inputString;
  }
  const firstWord = wordArray[0];
  const lastWord = wordArray[wordArray.length - 1];
  const lastWordFirstCharacterUpper = lastWord[0].toUpperCase();
  return `${firstWord} ${lastWordFirstCharacterUpper}.`;
}

export {
  abbreviateString,
};
