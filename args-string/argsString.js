
function argsString(string, array) {
  return array.reduce((stringToUpdate, valueToPlace) => stringToUpdate.replace('{}', valueToPlace), string);
}

export {
  argsString,
};
