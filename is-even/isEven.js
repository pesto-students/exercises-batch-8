
function isEven(num) {
  const numString = num.toString(2);
  return numString[numString.length - 1] === '0';
}

export {
  isEven,
};
