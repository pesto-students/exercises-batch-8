
const findNumber = (array, numToFind, numOne, numTwo) => array.find((number) => {
  if (numToFind === number && numToFind !== numOne && numToFind !== numTwo) {
    return true;
  }
  return false;
});

function threeSum(array, total) {
  if (array.length < 3) {
    throw new Error('Array must have at least three elements.');
  }

  if (typeof total !== 'number') {
    throw new Error('Second parameter should be a number.');
  }

  const arraySize = array.length;
  const combinations = [];

  for (let left = 0; left < arraySize - 1; left += 1) {
    let right = left + 1;

    while (right < arraySize) {
      const sumOfTwo = array[left] + array[right];
      const deficiency = total - sumOfTwo;

      const thirdNumber = findNumber(array, deficiency, array[left], array[right]);
      if (thirdNumber !== undefined) {
        combinations.push([array[left], array[right], thirdNumber]);
      }

      right += 1;
    }
  }

  const fourthArray = combinations[3];
  if (typeof fourthArray !== 'undefined') {
    const hasPositiveNumbers = fourthArray.every(num => num >= 0);
    if (!hasPositiveNumbers) {
      fourthArray.sort((a, b) => b - a);
    }
    return fourthArray;
  }

  return null;
}

export {
  threeSum,
};
