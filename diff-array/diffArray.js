const removeCommons = (arrayOne, arrayTwo) =>
  arrayOne.filter(value => !arrayTwo.includes(value));

function diffArray(arrayOne, arrayTwo) {
  const auxiliaryArray = arrayOne;
  const uniqueElementsInArrayOne = removeCommons(arrayOne, arrayTwo);
  const uniqueElementsInArrayTwo = removeCommons(arrayTwo, auxiliaryArray);
  return [...uniqueElementsInArrayOne, ...uniqueElementsInArrayTwo];
}

export { diffArray };
