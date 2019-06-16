
function binaryAgent(binaryCharSequence) {
  return binaryCharSequence.split(' ').map((binaryChar) => {
    const charCode = parseInt(binaryChar, 2);
    return String.fromCharCode(charCode);
  }).join('');
}

export {
  binaryAgent,
};
