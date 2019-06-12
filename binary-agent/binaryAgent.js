
function binaryAgent(binaryString) {
  const translatedString = binaryString.split(' ').map(binary => (
    String.fromCharCode(parseInt(binary, 2))
  ));
  return translatedString.join('');
}

export {
  binaryAgent,
};
