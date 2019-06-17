const isEven = number => number % 2 === 0;
const sum = (a, b) => a + b;
function sumEvenArgs(...numbers) {
  return numbers.filter(isEven).reduce(sum, 0);
}

export {
  sumEvenArgs,
};
