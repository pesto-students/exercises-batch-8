
function factorial(number) {
  let fact = 1;
  while (number !== 0) {
    fact *= number;
    // eslint-disable-next-line
    --number;
  }
  return fact;
}

export {
  factorial,
};
