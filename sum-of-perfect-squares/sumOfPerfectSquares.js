// Recursive approach
function sumOfPerfectSquares(num) {
  // base cases
  if (num <= 3) {
    return num;
  }

  // Maximum number of squares possible are n (1*1 + 1*1 + ..)
  let lengthOfSquares = num;

  // Go through all smaller numbers to recursively find minimum
  for (let i = 1; i <= num; i += 1) {
    const temp = i * i;
    if (temp > num) {
      break;
    } else {
      lengthOfSquares = Math.min(lengthOfSquares, 1 + sumOfPerfectSquares(num - temp));
    }
  }
  return lengthOfSquares;
}


export {
  sumOfPerfectSquares,
};
