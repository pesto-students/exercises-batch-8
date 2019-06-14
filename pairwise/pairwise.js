function pairwise(array, pairSum) {
  const indexLookupMap = array.reduce((acc, element, index) => {
    return { ...acc, [element]: index };
  }, {})

  const pairIndexSum = array.reduce((acc, element, index) => {
    const pairedItem = pairSum - element
    if (indexLookupMap[pairedItem] != undefined && indexLookupMap[pairedItem] != index) {
      return acc + index + indexLookupMap[pairedItem]
    } else {
      return acc
    }
  }, 0);

  // Every pair is counted twice
  return pairIndexSum / 2;
}

export {
  pairwise,
};
