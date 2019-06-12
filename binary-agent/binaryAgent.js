function binaryToEnglish(binaryCharacter) {
  return String.fromCharCode(parseInt(binaryCharacter, 2));
}

function binaryAgent(binaryString) {
  if (!binaryString) {
    return '';
  }
  const listOfBinaryCharacters = binaryString.split(' ');

  const listOfEnglishCharacters = listOfBinaryCharacters.map(
    binaryCharacter => binaryToEnglish(binaryCharacter),
  );

  return listOfEnglishCharacters.join('');
}

export {
  binaryAgent,
};
