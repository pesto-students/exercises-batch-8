
function factorial(value) {
  if (value === 0) {
    return 1;
  }
  return value * factorial(value - 1);
}

export {
  factorial,
};
