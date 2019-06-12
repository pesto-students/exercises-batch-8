function getCharacterFromCode(binaryCharacter) {
  return String.fromCharCode(parseInt(binaryCharacter, 2));
}

function binaryAgent(binaryString) {
  const textRepresentaionArray = binaryString
    .split(' ')
    .map(characterCode => getCharacterFromCode(characterCode));
  const textRepresentaionString = textRepresentaionArray.join('');
  return textRepresentaionString;
}

export {
  binaryAgent,
};
