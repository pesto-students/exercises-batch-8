function mapFilterAndReduce(array) {
  const Filter = string => string.split('').length < 5;
  const mappedArray = array.map(obj => obj.firstName);
  const filteredArray = mappedArray.filter(Filter);
  return filteredArray.reduce((object, current) => ({ ...object, [current]: current.length }), {});
}

export { mapFilterAndReduce };
