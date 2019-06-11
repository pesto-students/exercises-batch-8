
function arraySumTest(...numbers) {
  return numbers.reduce((partialSum, num) => partialSum + num);
}

export {
  arraySumTest,
};
