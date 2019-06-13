
function truthCheck(arrayOfObjects, keyToCheck) {
  return arrayOfObjects.every(obj => obj[keyToCheck]);
}

export {
  truthCheck,
};
