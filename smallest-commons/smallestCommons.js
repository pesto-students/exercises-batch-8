function gcd(num1, num2) {
  if (num2 === 0) {
    return num1;
  }
  return gcd(num2, num1 % num2);
}
function lcm(num1, num2) {
  return (num1 * num2) / gcd(num1, num2);
}
function smallestCommons(limits) {
  let lower;
  let upper;
  if (limits[0] > limits[1]) {
     lower = limits[0];
     upper = limits[1];
  } else {
     lower = limits[1];
     upper = limits[0];
  }

  if (lower === upper) {
    return lower;
  }
  let multiple = lower;
  for (let i = lower; i <= upper; i += 1) {
    multiple = lcm(multiple, i);
  }
  return multiple;
}

export { smallestCommons };
