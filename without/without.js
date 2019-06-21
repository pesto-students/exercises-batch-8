const find = (array, value) => {
  // eslint-disable-next-line guard-for-in
  for (const i in array) {
    if (Array.isArray(value) && Array.isArray(array[i])) {
      if (value.toString() === array[i].toString()) {
        return true;
      }
    }
    if (Object.is(value, array[i])) {
      return true;
    }
  }
  return false;
};
function without(removeThis, fromThis) {
  return fromThis.reduce((acc, value) => {
    if (!find(removeThis, value)) {
      acc.push(value);
    }
    return acc;
  }, []);
}

export { without };
