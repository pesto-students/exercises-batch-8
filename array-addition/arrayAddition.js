const isEmpty = array => array.length === 0;
const isNumeric = array => array.every(element => !Number.isNaN(element));
function arrayAddition(arrayOne, arrayTwo) {
  if (isEmpty(arrayOne) || isEmpty(arrayTwo)) {
    throw new Error('Either of the two arrays is empty');
  }
  if (!Array.isArray(arrayOne) || !Array.isArray(arrayTwo)) {
    throw new Error('Either of the parameters are not arrays');
  }
  if (!isNumeric(arrayOne) || !isNumeric(arrayTwo)) {
    throw new Error('Either of the two arrays are not numeric');
  }
  const resultantArray = [];
  for (let i = 0; i < Math.max(arrayOne.length, arrayTwo.length); i += 1) {
    resultantArray.push((arrayOne[i] || 0) + (arrayTwo[i] || 0));
  }
  return resultantArray;
}

export { arrayAddition };
