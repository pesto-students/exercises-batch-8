function binaryAgent(string) {
  const elementsArray = string.split(' ');
  return elementsArray
    .map(element => Number.parseInt(element, 2))
    .reduce((result, code) => result + String.fromCharCode(code), '');
}

export {
  binaryAgent,
};
