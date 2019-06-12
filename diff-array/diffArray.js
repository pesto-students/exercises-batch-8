
function diffArray(array1, array2) {
  const resultArray = [];
  array1.map((array1val) => {
    if (!array2.includes(array1val)) {
      resultArray.push(array1val);
    }
    return null;
  });
  array2.map((array2val) => {
    if (!array1.includes(array2val)) {
      resultArray.push(array2val);
    }
    return null;
  });
  return resultArray;
}

export {
  diffArray,
};
