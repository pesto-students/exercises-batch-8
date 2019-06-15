
/* eslint-disable */
function largeOfFour(nestedArray) {
  const largeOfFourArray = nestedArray.reduce((accLargeOfFour, currentArray) => {
    const largestElement = currentArray
      .reduce((largest, currentElement) => currentElement > largest ? currentElement : largest)
    const accLargeOfFourCopy = [...accLargeOfFour]
    accLargeOfFourCopy.push(largestElement)
    return accLargeOfFourCopy;
  }, [])
  return largeOfFourArray;
}

export {
  largeOfFour,
};
