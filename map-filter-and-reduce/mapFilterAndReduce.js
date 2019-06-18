function mapFilterAndReduce(array) {
  const lengthFilterPredicate = string => string.split('').length < 5;
  const mappedArray = array.map(obj => obj.firstName);
  const lengthFilteredArray = mappedArray.filter(lengthFilterPredicate);
  return lengthFilteredArray.reduce(
    (object, currentItem) => ({ ...object, [currentItem]: currentItem.length }),
    {},
  );
}

export { mapFilterAndReduce };
