
function rangeIter(lb, ub) {
  if (ub < lb) {
    return [];
  }
  if (!lb || !ub || !Number(ub) || !Number(lb)) {
    throw new TypeError('Missing or invalid values');
  }
  const range = [...Array(Math.abs(ub - lb + 1)).keys()].map(x => x + lb);
  return range;
}

export {
  rangeIter,
};
