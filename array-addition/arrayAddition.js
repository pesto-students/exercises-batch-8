const isValidNumberArray = array => array.every(element => typeof element === 'number');
const addArray = (smallerArray, largerArray) => {
  const sumArray = new Array(smallerArray.length).fill(0, 0, smallerArray.length);
  smallerArray.forEach((_, index) => {
    sumArray[index] = smallerArray[index] + largerArray[index];
  });
  if (smallerArray.length !== largerArray.length) {
    const extraElementsInLarger = largerArray.slice(smallerArray.length);
    sumArray.push(...extraElementsInLarger);
  }
  return sumArray;
};

function arrayAddition(arrayA, arrayB) {
  if (arrayA.length === 0 || arrayA.length === 0) throw new Error('Some of the arrays passed are empty');
  if (Array.isArray(arrayA) === false || Array.isArray(arrayB) === false) throw new Error('All parameters passed are not Arrays');
  if (!isValidNumberArray(arrayA) || !isValidNumberArray(arrayB)) throw new Error('All arrays passed are not numeric');
  if (arrayA.length < arrayB.length) return addArray(arrayA, arrayB);
  return addArray(arrayB, arrayA);
}

export {
  arrayAddition,
};
