function sumUpto(N) {
  return N * (N + 1) / 2;
}

function sumAll(range) {
  const [lowerIndex, upperIndex] = range[0] > range[1] ? [1, 0] : [0, 1];
  return sumUpto(range[upperIndex]) - sumUpto(range[lowerIndex] - 1);
}

export {
  sumAll,
};
