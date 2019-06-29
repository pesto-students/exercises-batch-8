
function largeOfFour(listOfArrays) {
  const largestArray = [];

  listOfArrays.forEach((arrayItem) => {
    const largestValueOfCurrentItem = Math.max.apply(null, arrayItem);
    largestArray.push(largestValueOfCurrentItem);
  });

  return largestArray;
}

export {
  largeOfFour,
};
