
function sumAll(...args) {
  const num1 = args[0][0];
  const num2 = args[0][1];
  let sum = 0;
  if (num2 >= num1) {
    for (let i = num1; i <= num2; i++) {
      sum += i;
    }
  } else {
    for (let i = num1; i >= num2; i--) {
      sum += i;
    }
  }
  return sum;
}

export {
  sumAll,
};
