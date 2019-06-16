function binaryAgent(stringInBinary) {
  const charArrayInBinary = stringInBinary.split(' ');
  const charArrayInDecimal = charArrayInBinary.map(charInBinary => parseInt(charInBinary, 2));
  const resultString = String.fromCharCode(...charArrayInDecimal);
  return resultString;
}

export {
  binaryAgent,
};
