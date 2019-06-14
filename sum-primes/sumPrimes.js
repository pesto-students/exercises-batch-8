const isPrime = (number) => {
  for (let index = 2; index < number; index += 1) {
    if (number % index === 0) {
      return false;
    }
  }
  return true;
};

function sumPrimes(number) {
  const numberRange = [...Array(number).keys()];
  numberRange.splice(0, 2);

  const primesWithinRange = numberRange.filter(isPrime);
  const sum = primesWithinRange.reduce((num, prevNum) => num + prevNum);

  return sum;
}

export {
  sumPrimes,
};
