const sum = (x, y) => x + y;

function nextPrime(numsArr, curr) {
  const currIdx = numsArr.indexOf(curr);
  return numsArr[currIdx + 1];
}

function numsFromRangeAtoB(rangeA, rangeB) {
  if (rangeA > rangeB) {
    // eslint-disable-next-line no-param-reassign
    [rangeA, rangeB] = [rangeB, rangeA];
  }
  return [...Array(rangeB + 1).keys()].slice(rangeA);
}


function sieveGen(prime) {
  function isNOtFactorOfPrime(number) {
    if (number < prime ** 2) {
      return true;
    }
    return number % prime !== 0;
  }
  return isNOtFactorOfPrime;
}

function sumPrimes(n) {
  const numsRangeN = numsFromRangeAtoB(2, n);
  let currPrime = 2;
  let sievedNumbers = numsRangeN;

  while (currPrime ** 2 <= n) {
    const isNotFactorOfPrime = sieveGen(currPrime);
    sievedNumbers = sievedNumbers.filter(isNotFactorOfPrime);
    currPrime = nextPrime(sievedNumbers, currPrime);
  }
  return sievedNumbers.reduce(sum);
}

export {
  sumPrimes,
};
