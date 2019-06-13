
function diffArray(array1, array2) {
  const array1SymmetricElements = array1.reduce((acc, element) => {
    if (!array2.includes(element)) {
      acc.push(element);
    }
    return acc;
  }, []);
  return array2.reduce((acc, element) => {
    if (!array1.includes(element) && !array1SymmetricElements.includes(element)) {
      acc.push(element);
    }
    return acc;
  }, array1SymmetricElements);
}

export {
  diffArray,
};
