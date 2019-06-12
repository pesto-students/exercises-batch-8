const getIntFromBinary = binary => parseInt(binary, 2);
const getASCIIFromIntegers = integers => String.fromCharCode(integers);
const getEngStrFromBinary = binaryString => getASCIIFromIntegers(getIntFromBinary(binaryString));
// eslint-disable-next-line arrow-body-style
const getEngStrArray = (binaryStrArray) => {
  return binaryStrArray.map(binaryString => getEngStrFromBinary(binaryString));
};

function binaryAgent(inputString) {
  const binaryStrArray = inputString.split(' ');
  return getEngStrArray(binaryStrArray).join('');
}

export {
  binaryAgent,
};
