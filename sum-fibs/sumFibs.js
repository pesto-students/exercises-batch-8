function isPerfectSquare(num) {
  return Math.floor(Math.sqrt(num)) ** 2 === num;
}

function isFibonacci(num) {
  return isPerfectSquare(5 * num * num + 4)
    || isPerfectSquare(5 * num * num - 4);
}

function range(n) {
  return [...Array(n).keys()].map(x => x + 1);
}

function sumFibs(num) {
  return 1 + range(num).reduce(
    (sum, number) => (number % 2 === 1 && isFibonacci(number) ? sum + number : sum),
    0,
  );
}

export {
  sumFibs,
};
