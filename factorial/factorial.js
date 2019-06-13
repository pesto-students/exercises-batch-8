
function factorial(...args) {
  const aNumber = args[0];
  if (aNumber === 0) {
    return 1;
  } else if (aNumber === 1) {
    return 1;
  } else {
    return aNumber * factorial(aNumber - 1);
  }
}

export {
  factorial,
};
