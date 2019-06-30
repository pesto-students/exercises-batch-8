
function unnest(array) {
  let resultantArray = array;
  if (!Array.isArray(array)) {
    resultantArray = Array.from(array);
  }
  return resultantArray.reduce((acc, item) => {
    if (typeof item[Symbol.iterator] === 'function') {
      return [...acc, ...item];
    }
    return [...acc, item];
  }, []);
}

export {
  unnest,
};
