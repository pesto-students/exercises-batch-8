
function factorial(number) {
  if (number) {
    return number * factorial(number - 1);
  }
  return 1;
}

export {
  factorial,
};
