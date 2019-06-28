// generating list of prime number upto limit using Sieve of Eratosthenes algorithm
// https://en.wikipedia.org/wiki/Sieve_of_Eratosthenes
function sieve(limit) {
  const bools = [];

  // generate a list of booleans all set to true initially
  // the array is indexed from 0 to limit representing all numbers
  // finally bools => [true, true, true, true, ...] = [2,3,4,5, ...]
  for (let i = 1; i < limit; i += 1) {
    bools.push(true);
  }

  // loop from 2 to limit setting the composite numbers to false
  // we start from 2 because we know 1 are not a prime number
  for (let i = 2; i < limit; i += 1) {
    if (bools[i - 2]) {
      for (let j = i * 2; j <= limit; j += i) {
        bools[j - 2] = false;
      }
    }
  }

  const primes = [];
  // now generate the list of primes only where
  // there is a true value in the bools array
  for (let p = 0; p < bools.length; p += 1) {
    if (bools[p]) {
      primes.push(p + 2);
    }
  }

  return primes;
}

function sumPrimes(limitNumber) {
  const primeNumberUptoLimit = sieve(limitNumber);
  return primeNumberUptoLimit.reduce((acc, nextNumber) => acc + nextNumber, 0);
}

export { sumPrimes };
