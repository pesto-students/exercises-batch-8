
function sumOfPerfectSquares(number) {
  if (number === 0) {
    return 0;
  }
  if (number === 1) {
    return 1;
  }
  let perfectSquareCount = 0;
  const lastPerfectSquareRoot = parseInt(Math.sqrt(number));
  let minimumPerfectSquareCount = Number.MAX_VALUE;
  for (let i = lastPerfectSquareRoot; i >= 1; i--) {
    perfectSquareCount = 1 + sumOfPerfectSquares(number - (i ** 2));
    if (perfectSquareCount < minimumPerfectSquareCount) {
      minimumPerfectSquareCount = perfectSquareCount;
    }
  }
  return minimumPerfectSquareCount;
}


export {
  sumOfPerfectSquares,
};
