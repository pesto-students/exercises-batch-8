
function sumAll(array) {
  const sortedArray = array.sort((a, b) => a - b);
  const lowerNo = sortedArray[0];
  const highNo = sortedArray[1];
  let sum = 0;
  for (let i = lowerNo; i <= highNo; i += 1) {
    sum += i;
  }
  return sum;
}

export {
  sumAll,
};
