
function dropElements(listOfNumbers, fnIsTruethy) {
  const modifiedList = listOfNumbers.filter(fnIsTruethy);

  return modifiedList;
}

export {
  dropElements,
};
