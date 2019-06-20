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

function uniq(array) {
  const uniqueValues = array.reduce((acc, value) => {
    if (!checkIfValuePresent(acc, value)) {
      acc.push(value);
    }
    return acc;
  }, []);
  return uniqueValues;
}

export {
  uniq,
};
