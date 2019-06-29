function getIndexToIns(numbers, number) {
  return numbers
    .concat(number)
    .sort((a, b) => {
      return a - b;
    })
    .indexOf(number);
}

export { getIndexToIns };
