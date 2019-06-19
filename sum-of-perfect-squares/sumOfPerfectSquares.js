// Optimal solution for n Op(n) =  Min {1 + Op(n - k^2)} for all k for 1 to sqrt(n)}
function sumOfPerfectSquares(n) {
  if (n <= 0) {
    return 0;
  }
  const optimalPerfectSquareCount = [];
  optimalPerfectSquareCount[0] = 0;
  optimalPerfectSquareCount[1] = 1;
  for (let i = 2; i <= n; i += 1) {
    for (let j = 1; j * j <= i; j += 1) {
      if (optimalPerfectSquareCount[i] === undefined) {
        optimalPerfectSquareCount[i] = Infinity;
      }
      optimalPerfectSquareCount[i] = Math.min(
        optimalPerfectSquareCount[i],
        1 + optimalPerfectSquareCount[i - j * j],
      );
    }
  }
  return optimalPerfectSquareCount[n];
}

export { sumOfPerfectSquares };
