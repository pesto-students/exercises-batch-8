function rangeIter(fromNum, toNum) {
  // eslint-disable-next-line no-restricted-globals
  if (isNaN(fromNum)) {
    throw new TypeError(`${typeof fromNum} is not a number`);
  }
  // eslint-disable-next-line no-restricted-globals
  if (isNaN(toNum)) {
    throw new TypeError(`${typeof fromNum} is not a number`);
  }
  const range = [];
  for (let i = fromNum; i <= toNum; i += 1) {
    range.push(i);
  }
  return range;
}

export {
  rangeIter,
};
