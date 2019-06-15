function chunkArrayInGroups(array, chunkSize) {
  const groupedArrays = array.reduce((accGroupedArray, element, index) => {
    const accGroupedArrayCopy = [...accGroupedArray];
    const splittedArrayIndex = index % chunkSize;
    if (splittedArrayIndex === 0) {
      accGroupedArrayCopy[accGroupedArrayCopy.length] = [];
      accGroupedArrayCopy[accGroupedArrayCopy.length - 1].push(element);
    } // eslint-disable-line brace-style
    else {
      accGroupedArrayCopy[accGroupedArrayCopy.length - 1].push(element);
    }
    return accGroupedArrayCopy;
  }, []);
  return groupedArrays;
}

export {
  chunkArrayInGroups,
};
