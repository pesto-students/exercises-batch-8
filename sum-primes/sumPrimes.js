
function sumPrimes(maxNum) {
  const sieve = new Array(maxNum + 1);
  sieve.fill(1);
  sieve[0] = 0;
  sieve[1] = 0;
  for (let i = 2; i < Math.sqrt(maxNum); i += 1) {
    if (sieve[i]) {
      for (let j = i * 2; j <= maxNum; j += i) {
        sieve[j] = 0;
      }
    }
  }
  const sum = sieve.reduce((acc, val, index) => acc + (val * index));
  return sum;
}

export {
  sumPrimes,
};
