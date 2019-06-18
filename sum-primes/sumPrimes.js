
function sumPrimes(arg) {
  let sum = 0;
  for (let i = 2; i <= arg; i += 1) {
    let flag = 0;
    for (let j = 2; j <= i / 2; j += 1) {
      if (i % j === 0) {
        flag = 1;
        break;
      }
    }
    if (flag === 0) {
      sum += i;
    }
  }
  return sum;
}

export {
  sumPrimes,
};
