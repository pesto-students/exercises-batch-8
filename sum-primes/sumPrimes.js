const range = (min, max) => [...Array(max).keys()].map(num => num + min);
const isPrime = (number) => {
  for (let index = 2; index < number; index += 1) {
    if (number % index === 0) {
      return false;
    }
  }
  return true;
};

function sumPrimes(number) {
  const numberRange = range(2, number - 1);

  const primesWithinRange = numberRange.filter(isPrime);
  const sum = primesWithinRange.reduce((num, prevNum) => num + prevNum);

  return sum;
}

export {
  sumPrimes,
};
