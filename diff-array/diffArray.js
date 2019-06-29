const removeCommons = (arrayOne, arrayTwo) =>
  arrayOne.filter(value => !arrayTwo.includes(value));

function diffArray(arrayOne, arrayTwo) {
  // const auxiliaryArray = arrayOne;
  const uniqueElementsInArrayOne = removeCommons(arrayOne, arrayTwo);
  const uniqueElementsInArrayTwo = removeCommons(arrayTwo, arrayOne);
  return [...uniqueElementsInArrayOne, ...uniqueElementsInArrayTwo];
}

export { diffArray };
