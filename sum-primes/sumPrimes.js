
function isPrime(num) {
  for (let i = 2, s = Math.sqrt(num); i <= s; i += 1) {
    if (num % i === 0) return false;
  }
  return num > 1;
}

function sumPrimes(...args) {
  let sum = 0;
  for (let i = 0; i <= args; i += 1) {
    if (isPrime(i)) {
      sum += i;
    }
  }
  return sum;
}

export {
  sumPrimes,
};
