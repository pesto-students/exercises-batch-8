// Using Euclidean algorithm 
function greatestCommonDivisor(num1, num2) {
  if (num2 === 0) {
    return num1;
  }
  return greatestCommonDivisor(num2, num1 % num2);
}

function leastCommonMultiple(num1, num2) {
  return num1 * num2 / greatestCommonDivisor(num1, num2);
}
function smallestCommons(limits) {
  const [lowerlimit, upperLimit] = limits.sort((a, b) => a - b);
  if (lowerlimit === upperLimit) {
    return lowerlimit;
  }
  let multiple = lowerlimit;
  for (let i = lowerlimit; i <= upperLimit; i += 1) {
    multiple = leastCommonMultiple(multiple, i);
  }
  return multiple;
}

export {
  smallestCommons,
};
