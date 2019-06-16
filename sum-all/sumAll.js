
function sumAll(array) {
  const sortedArray = array.sort((a, b) => a - b);
  const startIndex = sortedArray[0];
  const endIndex = sortedArray[1];
  let sum = 0;
  for (let i = startIndex; i <= endIndex; i += 1) {
    sum += i;
  }
  return sum;
}

export {
  sumAll,
};
