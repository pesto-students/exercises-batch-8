
function largeOfFour(arrays) {
  const maxValuesArray = [];
  if (arrays.length !== 4) {
    throw Error('Function largeFour only accepts nested array with length of 4');
  }
  arrays.map((array) => {
    let maxValue = -Infinity;
    array.map((value) => {
      if (value > maxValue) {
        maxValue = value;
      }
      return null;
    });
    maxValuesArray.push(maxValue);
    return null;
  });
  return maxValuesArray;
}

export {
  largeOfFour,
};
