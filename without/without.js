
function without(arrayOne, arrayTwo) {
  if (!Array.isArray(arrayOne) || !Array.isArray(arrayTwo)) {
    const error = new TypeError(`Expected Arrays, received ${typeof arrayOne} ${typeof arrayTwo} respectively`);
    throw error;
  }
  return arrayTwo.filter(value => value !== -1 * value && !arrayOne.includes(value));
}

export {
  without,
};
