const checkIfValuePresent = (array, value) => {
  // eslint-disable-next-line guard-for-in
  for (const i in array) {
    if (
      Array.isArray(value)
      && Array.isArray(array[i])
      && JSON.stringify(array[i]) === JSON.stringify(value)
    ) {
      return true;
    }
    if (Object.is(array[i], value)) {
      return true;
    }
  }
  return false;
};

function union(array1, array2) {
  return array2.reduce((acc, value) => {
    if (!checkIfValuePresent(acc, value)) {
      acc.push(value);
    }
    return acc;
  }, array1);
}

export {
  union,
};
