const arrayCombiner = array => array;
const stringCombiner = array => array.join('');

function getPositiveIndex(index, length) {
  if (index < 0) {
    if (index + length > 0) {
      return index + length;
    }
    return -1;
  }
  return index;
}

function slice(start, end, iterable) {
  const slicedArray = [];
  const startIndex = getPositiveIndex(start, iterable.length);
  const endIndex = getPositiveIndex(end, iterable.length);
  if (startIndex >= 0 && endIndex >= 0) {
    let index = 0;
    for (const element of iterable) {
      if (index >= startIndex && index < endIndex) {
        slicedArray.push(element);
      }
      index += 1;
    }
  }
  if (typeof iterable === 'string') {
    return stringCombiner(slicedArray);
  }
  if (Array.isArray(iterable)) {
    return arrayCombiner(slicedArray);
  }
  throw new Error('iterable not supported');
}

export { slice };
