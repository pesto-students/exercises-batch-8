
function getIndexToIns([...numbers], insertingNumber) {
  return numbers.reduce((acc, num) => {
    if (num < insertingNumber) {
      // eslint-disable-next-line no-param-reassign
      acc += 1;
    }
    return acc;
  }, 0);
}

export {
  getIndexToIns,
};
