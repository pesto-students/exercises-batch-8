
function findElement(listOfNumbers, callback) {
  const numberToReturn = listOfNumbers.find(num => callback(num));

  return numberToReturn;
}

export {
  findElement,
};
