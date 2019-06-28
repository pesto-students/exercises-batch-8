const isSquare = n => n > 0 && Math.sqrt(n) % 1 === 0;
const range = (min, max) => [...Array(max).keys()].map(num => num + min);
const getPerfectSquares = size => range(1, size).filter(num => isSquare(num));
const getMaxSubstractable = (numberOptions, diff) => numberOptions.find(num => num <= diff);

function sumOfPerfectSquares(size) {
  const perfectSquares = getPerfectSquares(size);
  const summables = [];

  const reversedPerfectSquares = perfectSquares.reverse();
  const numberOptions = reversedPerfectSquares;

  reversedPerfectSquares.forEach(() => {
    let diff = size;
    const thisSummable = [];
    while (diff > 0) {
      const maxSubstractable = getMaxSubstractable(numberOptions, diff) || 1;
      diff -= maxSubstractable;
      thisSummable.push(maxSubstractable);
    }
    summables.push(thisSummable);
    numberOptions.shift();
  });

  const summableSizes = summables.map(array => array.length);
  const smallestSummable = Math.min(...summableSizes);

  return smallestSummable;
}

export {
  sumOfPerfectSquares,
};
