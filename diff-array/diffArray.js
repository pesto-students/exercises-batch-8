
function diffArray(array1, array2) {
  const diff = [];

  array1.forEach((element) => {
    const indexInArray2 = array2.indexOf(element);
    if (indexInArray2 > -1) {
      array2.splice(indexInArray2, 1);
    } else {
      diff.push(element);
    }
  });

  return diff.concat(array2);
}

export {
  diffArray,
};
