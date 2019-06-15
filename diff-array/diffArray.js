function diffArray(firstArray, secondArray) {
  let combinedArray = [...firstArray, ...secondArray];

  // create lookup map for first array
  const firstArrayLookupMap = firstArray
    .reduce((lookupMapAcc, currentElement, i) => (
      { ...lookupMapAcc, [currentElement]: { value: currentElement, index: i } }
    ), {});

  // update combined array with null values, for intersecting values using lookup map
  combinedArray = secondArray
    .reduce((combinedArrayAcc, currentElement, index) => {
      if (firstArrayLookupMap[currentElement] !== undefined) {
        const updatedArray = [...combinedArrayAcc];
        updatedArray[firstArrayLookupMap[currentElement].index] = null;
        updatedArray[firstArray.length + index] = null;
        return updatedArray;
      }
      return combinedArrayAcc;
    }, combinedArray);

  // create copy of combined array with only non null values
  const differenceArray = combinedArray.filter(arrayElement => arrayElement != null);
  return differenceArray;
}

export {
  diffArray,
};
