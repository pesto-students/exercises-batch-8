
function rangeIter(lb, ub) {
  if (ub < lb) {
    return [];
  }
  if (!lb || !ub) {
    throw new TypeError('Missing values');
  }
  if (!Number(lb) || !Number(ub)) {
    throw new TypeError('Invalid values');
  }
  const range = [];
  for (let i = lb; i <= ub; i += 1) {
    range.push(i);
  }
  return range;
}

export {
  rangeIter,
};
