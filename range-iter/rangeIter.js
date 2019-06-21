//  wip
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
  return {
    [Symbol.iterator]() {
      let index = -1;
      return {
        next() {
          index += 1;
          return {
            value: range[index],
            done: (range.length <= index),
          };
        },
        [Symbol.iterator]() {
          return range[Symbol.iterator]();
        },
      };
    },
  };
}

export {
  rangeIter,
};
