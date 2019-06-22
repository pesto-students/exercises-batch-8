const isEmpty = arr => arr.length === 0;

function xprod(arrayA, arrayB) {
  if (isEmpty(arrayA) || isEmpty(arrayB)) {
    return [];
  }

  const pairs = [];

  arrayA.map(eleOfarrayA => (
    arrayB.map(eleOfarrayB => pairs.push([eleOfarrayA, eleOfarrayB]))
  ));

  return pairs;
}

export {
  xprod,
};
