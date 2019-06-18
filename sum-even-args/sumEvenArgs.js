
function sumEvenArgs(...numbers) {
  const isEven = num => num % 2 === 0;
  const evenNumbers = numbers.filter(isEven);
  const sumOfEvenNumbers = evenNumbers.reduce((sum, num) => sum + num, 0);
  return sumOfEvenNumbers;
}

export {
  sumEvenArgs,
};
