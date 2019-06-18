
function sumEvenArgs(...numbers) {
  const sum = (a, b) => a + b;
  const isEven = num => num % 2 === 0;
  const evenNumbers = numbers.filter(isEven);
  return evenNumbers.reduce(sum, 0);
}

export {
  sumEvenArgs,
};
