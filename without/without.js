function isNegativeZero(number) {
  return number === 0 && 1 / number < 0;
}

function stringified(input) {
  if (input === 0) {
    return isNegativeZero(input) ? '-0' : '+0';
  }
  if (Number.isNaN(input)) {
    return 'NaN';
  }
  return JSON.stringify(input);
}

function without(filterArray, array) {
  const filterArrayMap = filterArray.reduce(
    (acc, currentElement) => ({ ...acc, [stringified(currentElement)]: true }),
    {},
  );
  return array.reduce((acc, currentElement) => {
    if (filterArrayMap[stringified(currentElement)] === undefined) {
      return [...acc, currentElement];
    }
    return acc;
  }, []);
}

export { without };
