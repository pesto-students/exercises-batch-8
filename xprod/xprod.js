function returnArray(bigArray, smallArray) {
  const result = [];
  bigArray.map((element) => {
    smallArray.map(element2 => result.push([element, element2]));
  });

  return result;
}

function xprod([...array1], [...array2]) {
  const length1 = array1.length;
  const length2 = array2.length;
  if (length1 === 0 || length2 === 0) {
    return [];
  }
  return returnArray(array1, array2);
}

export { xprod };
