const isOdd = num => num % 2 !== 0;

function sumFibs(number) {
  let previous = 1;
  let current = 1;

  let sum = current + previous;
  for (let i = 1; i < number; i += 1) {
    if (i === current + previous) {
      previous = current;
      current = i;
      if (isOdd(i)) {
        sum = i + sum;
      }
    }
  }

  return sum;
}

export {
  sumFibs,
};
