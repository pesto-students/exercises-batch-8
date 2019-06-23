function getBiggerArray(firstArray, secondArray) {
  if (firstArray.length > secondArray.length) {
    return { biggerArray: firstArray, smallerArray: secondArray };
  }
  return { biggerArray: secondArray, smallerArray: firstArray };
}

function validateInput(firstArray, secondArray) {
  if (!(firstArray instanceof Array)) {
    throw new Error(`${firstArray} not an array`);
  }
  if (!(secondArray instanceof Array)) {
    throw new Error(`${secondArray} not an array`);
  }
  if (firstArray.length === 0) {
    throw new Error(`${firstArray} is empty`);
  }
  if (secondArray.length === 0) {
    throw new Error(`${secondArray} is empty`);
  }
}

function arrayAddition(firstArray, secondArray) {
  validateInput(firstArray, secondArray);
  const { biggerArray, smallerArray } = getBiggerArray(firstArray, secondArray);
  return biggerArray.map((element, index) => {
    const smallerArrayElement = smallerArray[index];
    if (!(typeof element === 'number')) {
      throw new Error(`${element} not a number`);
    }
    if (!(typeof smallerArrayElement === 'number') && smallerArrayElement !== undefined) {
      throw new Error(`${smallerArrayElement} not a number`);
    }
    if (smallerArrayElement === undefined) {
      return element;
    }
    return element + smallerArrayElement;
  });
}

export { arrayAddition };
