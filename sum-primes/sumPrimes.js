function getPrimeSum(array, sum) {
  if (array.length === 0) {
    return sum;
  }
  const updatedSum = sum + array[0];
  const multiplePredicate = number => number % array[0] !== 0;
  const updatedArray = array.filter(multiplePredicate);
  return getPrimeSum(updatedArray, updatedSum);
}

function getArrayUpto(number) {
  return Array.from(Array(number + 1).keys()).slice(2);
}

function sumPrimes(number) {
  const arrayOfNumbers = getArrayUpto(number);
  return getPrimeSum(arrayOfNumbers, 0);
}

export { sumPrimes };