
function sumPrimes(number) {
  let allNumbers = [];
  let index = 2;
  while (index < number) {
    allNumbers.push(index);
    index += 1;
  }
  const allNumbersCopy = [...allNumbers];
  allNumbersCopy.map((divisor) => {
    allNumbers = [...allNumbers.filter(value => (value % divisor !== 0 || divisor === value))];
    return null;
  });
  return allNumbers.reduce((a, b) => a + b);
}

export {
  sumPrimes,
};
