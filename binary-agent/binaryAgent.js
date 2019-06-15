
function binaryAgent(...args) {
  const aString = args[0];
  const normalString = aString.split(' ').map(binChar => (
    String.fromCharCode(parseInt(binChar, 2))
  ));
  return normalString.join('');
}

export {
  binaryAgent,
};
