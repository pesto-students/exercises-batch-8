
const isEmpty = array => array.length === 0;
function xprod(arrayOne, arrayTwo) {
  if (!Array.isArray(arrayOne) || !Array.isArray(arrayTwo)) {
    const error = new TypeError(` Expected arrays, received ${typeof arrayOne}, ${typeof arrayTwo} respectively`);
    throw error;
  }
  if (isEmpty(arrayOne) || isEmpty(arrayTwo)) {
    return [];
  }
  const xProductPairs = [];
  arrayOne.map(firstOfPair => (
    arrayTwo.map(secondOfPair => xProductPairs.push([firstOfPair, secondOfPair]))
  ));
  return xProductPairs;
}

export {
  xprod,
};
