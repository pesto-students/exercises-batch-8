const isSquare = n => n > 0 && Math.sqrt(n) % 1 === 0;
const range = (min, max) => [...Array(max).keys()].map(num => num + min);
const getPerfectSquares = size => range(1, size).filter(num => isSquare(num));

function sumOfPerfectSquares(size) {
  const perfectSquares = getPerfectSquares(size);
  const summables = [];

  let sum = size;
  perfectSquares.reverse().forEach((square) => {
    if (sum > square) {
      sum -= square;
      if (sum >= 0) {
        summables.push(square);
      }
      if (sum === 1) {
        summables.push(1);
      }
    }
  });

  return summables.length;
}

export {
  sumOfPerfectSquares,
};
