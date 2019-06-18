
function diffArray(array1, array2) {
  const onlyInArray1 = array1.filter(element => !array2.includes(element));
  const onlyInArray2 = array2.filter(element => !array1.includes(element));
  return [...onlyInArray1, ...onlyInArray2];
}


export {
  diffArray,
};
