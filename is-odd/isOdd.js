
function isOdd(num) {
  const numString = num.toString(2);
  return numString[numString.length - 1] === '1';
}

export {
  isOdd,
};
