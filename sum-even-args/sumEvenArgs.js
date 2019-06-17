
function sumEvenArgs(...numbers) {
  const evenNumbers = numbers.filter(num => num % 2 === 0);
  const sumOfEvenNumbers = evenNumbers.reduce((acc, num) => acc + num, 0);
  return sumOfEvenNumbers;
}

export {
  sumEvenArgs,
};
