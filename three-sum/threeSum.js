
const isNumber = numberLike => !Number.isNaN(numberLike);

function threeSum(array, total) {
  const arrayIsEmpty = array.length === 0;
  const arrayHasNumbers = array.every(numberLike => isNumber(numberLike));
  const totalIsNumber = isNumber(total);

  if (arrayIsEmpty || !arrayHasNumbers || !totalIsNumber) {
    throw new Error('Array elements and total should be numbers only.');
  }

  let left;
  let right;

  for (let index = 0; index < array.length - 2; index += 1) {
    left = index + 1;
    right = array.length - 1;
    while (left < right) {
      const sum = array[index] + array[left] + array[right];
      // FIXME: issue in sorting order
      if (sum === total) {
        const arrayToReturn = [array[index], array[left], array[right]];
        return arrayToReturn;
      }
      if (sum > total) {
        left += 1;
      } else if (sum < total) {
        right -= 1;
      }
    }
  }

  return null;
}

export {
  threeSum,
};
