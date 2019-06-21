
function binaryAgent(binaryString) {
  const binaryCharacters = binaryString.split(' ');
  const resultCharacters = binaryCharacters.map(binaryCharacter => parseInt(binaryCharacter, 2));
  return String.fromCharCode(...resultCharacters);
}

export {
  binaryAgent,
};
