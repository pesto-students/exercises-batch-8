
function truthCheck(array, keyToCheck) {
  const filteredArray = array.filter(object => !!object[keyToCheck]);
  return filteredArray.length === array.length;
}

export {
  truthCheck,
};
