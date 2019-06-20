
const isPrime = (num) => {
  if (num <= 0) {
    return false;
  }

  for (let index = 2; index < num; index += 1) {
    if (num % index === 0) {
      return false;
    }
  }

  return num !== 1;
};

function primalityTest(number) {
  return isPrime(number);
}

export {
  primalityTest,
};
