const gcd = (num1, num2) => {
  if (num1 === num2) {
    return num2;
  }
  if (num1 > num2) {
    num1 = num1 - num2; // eslint-disable-line
  } else {
    num2 = num2 - num1; // eslint-disable-line
  }
  return gcd(num1, num2);
};

// euclidean algorithm
const lcm = (num1, num2) => {
  const gcdVal = gcd(num1, num2);
  return (num1 * num2) / gcdVal;
};

function smallestCommons(numbers) {
  const sortedNumbers = numbers.sort();
  const sequentialNumbers = [...Array(sortedNumbers[1] - sortedNumbers[0] + 1).keys()]
    .map(index => index + sortedNumbers[0]);
  return sequentialNumbers
    .reduce((acc, element) => lcm(acc, element));
}

export {
  smallestCommons,
};
