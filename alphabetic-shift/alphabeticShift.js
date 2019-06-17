const nextChar = char => String.fromCharCode(char.charCodeAt(0) + 1);

function alphabeticShift(text) {
  const characters = text.split('');
  const replacedCharacters = characters.map(char => nextChar(char));
  const replacedText = replacedCharacters.join('');

  return replacedText;
}

export {
  alphabeticShift,
};
