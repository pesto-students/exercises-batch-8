
function splitEvery(sliceLength, iterable) {
  if (typeof sliceLength !== 'number' || sliceLength <= 0) {
    if (Number.isNaN(sliceLength)) {
      throw new TypeError('Expected a positive number, received NaN');
    }
    throw new TypeError(`Expected a positive number,
     received ${sliceLength} of type ${typeof sliceLength}`);
  }

  if (iterable.length === 0) {
    return [];
  }

  function splitter(size, iter) {
    if (size >= iter.length) {
      return [iter];
    }
    return [iter.slice(0, size), ...splitter(size, iter.slice(size))];
  }

  return splitter(sliceLength, iterable);
}

export {
  splitEvery,
};
