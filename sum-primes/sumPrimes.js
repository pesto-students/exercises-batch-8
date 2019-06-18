/*
Algorithm
1. Create Array from 2 to number
2. add first element of array and remove all its multiples
  (First element is necessarily prime, as its remaining in array).
3. run 2 until array size becomes 0
*/
function getPrimeSum(array, sum) {
  if (array.length === 0) {
    return sum;
  }
  const updatedSum = sum + array[0];
  const updatedArray = array.filter(number => number % array[0] !== 0);
  return getPrimeSum(updatedArray, updatedSum);
}

function sumPrimes(number) {
  const arrayOfNumbers = Array.from(Array(number + 1).keys()).slice(2);
  return getPrimeSum(arrayOfNumbers, 0);
}

export { sumPrimes };
