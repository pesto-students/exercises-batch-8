function range(min, max) {
  const arr = [];
  for (let i = min; i <= max; i += 1) {
    arr.push(i);
  }
  return arr;
}

function gcd(a, b) {
  return !b ? a : gcd(b, a % b);
}


function lcm(a, b) {
  return (a * b) / gcd(a, b);
}


function smallestCommons([number1, number2] = []) {
  let min;
  let max;
  if (number1 > number2) {
    max = number1;
    min = number2;
  } else {
    max = number2;
    min = number1;
  }

  let multiple = min;
  range(min, max).forEach((num) => {
    multiple = lcm(multiple, num);
  });

  return multiple;
}

export {
  smallestCommons,
};
