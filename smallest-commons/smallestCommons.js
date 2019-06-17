
// Euclids method
function gcd(a, b) {
  if (a === 0) {
    return b;
  }
  return gcd(b % a, a);
}

function lcm(numA, numB) {
  return (numA * numB) / gcd(numA, numB);
}

function range(min, max) {
  return [...Array(max + 1).keys()].slice(min);
}

function smallestCommons(numsRange) {
  numsRange.sort((a, b) => a - b);
  const [minNum, maxNum] = numsRange;
  const numbers = range(minNum, maxNum);
  let multiple = minNum;
  numbers.forEach((num) => {
    multiple = lcm(multiple, num);
  });
  return multiple;
}

export {
  smallestCommons,
};
