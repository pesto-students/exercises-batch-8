function isOdd(number) {
  return number % 2 === 1;
}

function calculateFibSum(currentFib, prevFib, sum, ceil) {
  const nextFib = currentFib + prevFib;
  if (nextFib > ceil) {
    return sum;
  }
  if (isOdd(nextFib)) {
    return calculateFibSum(nextFib, currentFib, sum + nextFib, ceil);
  }
  return calculateFibSum(nextFib, currentFib, sum, ceil);
}

function sumFibs(ceil) {
  if (ceil < 1) {
    return 0;
  }
  if (ceil === 1) {
    return 2;
  }
  const currentFib = 1;
  const previousFib = 1;
  return calculateFibSum(currentFib, previousFib, 2, ceil);
}

export { sumFibs };
