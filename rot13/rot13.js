
function rot13(string) {
  const updatedWords = [];
  let stringCopy = string;
  const initialWords = string.replace(/[^a-zA-Z]/g, ' ').split(' ');
  initialWords.map((word) => {
    const updatedLetters = [];
    word.split('').map((letter) => {
      updatedLetters.push(String.fromCharCode(letter.charCodeAt(0) - 13 < 65
        ? letter.charCodeAt(0) + 13 : letter.charCodeAt(0) - 13));
      return null;
    });
    updatedWords.push(updatedLetters.join(''));
    return null;
  });
  updatedWords.map((word, i) => {
    stringCopy = stringCopy.replace(initialWords[i], word);
    return null;
  });
  return stringCopy;
}

export {
  rot13,
};
