
function binaryAgent(binaryText) {
  const binaryCharacters = binaryText.split(' ');
  const characters = binaryCharacters.map(character => parseInt(character, 2));

  return String.fromCharCode(...characters);
}

export {
  binaryAgent,
};
