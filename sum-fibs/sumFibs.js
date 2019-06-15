const sum = (x, y) => x + y;

function sumFibs(maxValue) {
  const fibs = [1, 1];
  let idx = 1;
  while (true) {
    const fiboNum = fibs[idx] + fibs[idx - 1];
    if (fiboNum > maxValue) {
      break;
    }
    fibs.push(fiboNum);
    idx += 1;
  }

  const oddFibs = fibs.filter(num => num % 2 !== 0);
  return oddFibs.reduce(sum);
}

export {
  sumFibs,
};
