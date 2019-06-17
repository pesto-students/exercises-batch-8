
function sumEvenArgs(...args) {
  const anArray = args;
  const evenNumbers = anArray.filter(x => x % 2 === 0);
  if (evenNumbers.length >= 1) {
    return evenNumbers.reduce((acc, sum) => acc + sum);
  }
  return 0;
}

export {
  sumEvenArgs,
};
