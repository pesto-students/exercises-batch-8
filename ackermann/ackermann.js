
function ackermann({ m, n }) {
  if (m < 0 || n < 0) {
    throw new Error('inputs must be positive integers');
  }
  if (m === 0 && n >= 0) {
    return n + 1;
  }
  if (n === 0 && m > 0) {
    return ackermann({ m: m - 1, n: 1 });
  }
  return ackermann({ m: m - 1, n: ackermann({ m, n: n - 1 }) });
}

export {
  ackermann,
};
