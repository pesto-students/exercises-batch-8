
function chunkArrayInGroups(array, nestedArraySize) {
  let lb = 0;
  let ub = nestedArraySize;
  const resultArray = [];
  while (lb < array.length) {
    resultArray.push(array.slice(lb, ub));
    lb = ub;
    ub += nestedArraySize;
  }
  return resultArray;
}

export {
  chunkArrayInGroups,
};
