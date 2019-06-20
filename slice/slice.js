
function slice(start, end, iterable) {
  if (typeof start !== 'number') {
    if (Number.isNaN(start)) {
      throw new TypeError('Received NaN, expected a number');
    }
    throw new TypeError(`Received ${start} of type ${typeof start}, expected a number`);
  }
  if (typeof end !== 'number' || Number.isNaN(end)) {
    return '';
  }
  const { length } = iterable;
  const properStart = start < 0 ? length + start : start;
  const properEnd = end < 0 ? length + end : end;
  const properIterable = typeof iterable === 'string' ? iterable.split('') : iterable;

  const slicedIterable = [];
  for (const [idx, el] of properIterable.entries()) {
    if (idx >= properStart && idx < properEnd) {
      slicedIterable.push(el);
    }
  }
  if (typeof iterable !== 'string') {
    return slicedIterable;
  }
  return slicedIterable.join('');
}

export {
  slice,
};
