function splitEvery(extractBy, array) {
  if (extractBy <= 0) {
    throw new Error('The factor extractBy cannot be negative');
  }

  if (array.length >= 0) {
    return array.slice().reduce((resultantArray, item, index) => {
      const extractIndex = Math.floor(index / extractBy);
      const auxiliaryArray = resultantArray;
      if (!auxiliaryArray[extractIndex]) {
        auxiliaryArray[extractIndex] = [];
      }
      auxiliaryArray[extractIndex].push(item);
      return auxiliaryArray;
    }, []);
  }
  return array;
}
export {
  splitEvery,
};
