const abbreviateWord = word => `${word[0].toUpperCase()}.`;

function abbreviateString(string) {
  if (typeof string === 'string' || string instanceof String) {
    const wordInString = string.split(' ');
    const firstWord = wordInString[0];
    const lastWord = wordInString[wordInString.length - 1];
    const abbreviatedLasrWord = abbreviateWord(lastWord);
    return `${firstWord} ${abbreviatedLasrWord}`;
  }
  throw Error('Invalid parameters !');
}

export {
  abbreviateString,
};
