
function abbreviateString(sentence) {
  if (typeof sentence !== 'string') {
    throw new Error('Invalid Input. It must be of type String');
  }

  const words = sentence.split(' ');
  const firstWord = words.shift();
  const lastWord = words.pop();
  const capitalizedFirstLetterOfLastWord = lastWord.charAt(0).toUpperCase();

  return `${firstWord} ${capitalizedFirstLetterOfLastWord}.`;
  // return `${firstWord} ${lastWord[0].toUpperCase()}.`;
}

export {
  abbreviateString,
};
