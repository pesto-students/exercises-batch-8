
function sumAll(numbers) {
  const [min, max] = numbers.sort((a, b) => a - b);
  const average = (min + max) / 2;
  const totalNumbers = max - min + 1;

  return average * totalNumbers;
}

export {
  sumAll,
};
