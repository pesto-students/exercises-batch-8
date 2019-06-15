const cache = {};
function sumOfPerfectSquares(num) {
  if (num in cache) {
    return cache[num];
  }
  if (num === 0) {
    return 0;
  }
  const root = Math.floor(Math.sqrt(num));
  if (root ** 2 === num) {
    cache[num] = 1;
  } else {
    // generate all squares less than num
    const squares = [...Array(root).keys()].map(a => (a + 1) ** 2);
    // find minimum recursively
    cache[num] = squares.reduce(
      (minSumCount, square) => Math.min(minSumCount, 1 + sumOfPerfectSquares(num - square)), num,
    );
  }
  return cache[num];
}

export {
  sumOfPerfectSquares,
};
