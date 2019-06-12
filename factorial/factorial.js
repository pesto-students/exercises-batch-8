
function factorial(arg) {
  let fact = 1;
  for (let i = 1; i <= arg; i += 1) {
    fact *= i;
  }
  return fact;
}

export {
  factorial,
};
