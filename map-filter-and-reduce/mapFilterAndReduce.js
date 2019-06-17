
function mapFilterAndReduce(array) {
  const filteredArray = array.filter(arrayElement => arrayElement.firstName.length < 5);
  const reducedArray = filteredArray.reduce((acc, arrValue) => {
    acc[arrValue.firstName] = arrValue.firstName.length;
    return acc;
  }, {});
  return reducedArray;
}

export {
  mapFilterAndReduce,
};
