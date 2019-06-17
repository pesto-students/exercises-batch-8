
const checkEven = number => number % 2 === 0;

function sumEvenArgs(...numbers) {
  return numbers.reduce((acc, number) => (checkEven(number) ? acc + number : acc), 0);
}

export {
  sumEvenArgs,
};
