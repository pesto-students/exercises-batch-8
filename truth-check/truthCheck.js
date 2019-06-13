
function truthCheck(arrayOfObjects, keyToCheck) {
  return arrayOfObjects.forEach(object => Object.keys(object).includes(keyToCheck));
}

export {
  truthCheck,
};
