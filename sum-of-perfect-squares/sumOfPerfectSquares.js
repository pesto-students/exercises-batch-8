const memo = {
  1: 1,
};

function minNoOfSquaresToN(n) {
  if (n > 0 && Math.sqrt(n) % 1 === 0) { // isInt
    return 1;
  }
  if (memo[n] !== undefined) {
    return memo[n];
  }
  let minSquares = Number.MAX_VALUE;
  for (let i = 1; i < n; i += 1) {
    minSquares = Math.min(minSquares, minNoOfSquaresToN(i) + minNoOfSquaresToN(n - i));
  }
  memo[n] = minSquares;
  return minSquares;
}

function sumOfPerfectSquares(n) {
  return minNoOfSquaresToN(n);
}

export {
  sumOfPerfectSquares,
};
