function getNumsInRange(lb, ub) {
  return [...Array(ub + 1).keys()].slice(lb);
}

const sum = (x, y) => x + y;

function sumAll(range) {
  range.sort((a, b) => a - b);
  const [lowerRange, upperRange] = range;
  const numsFromAToB = getNumsInRange(lowerRange, upperRange);
  return numsFromAToB.reduce(sum);
}

export {
  sumAll,
};
