
function sumEvenArgs(...numbers) {
  return numbers.reduce((acc, number) => {
    if (number % 2 === 0) {
      return acc + number;
    }
    return acc;
  }, 0);
}

export {
  sumEvenArgs,
};
