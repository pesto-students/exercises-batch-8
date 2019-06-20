
function sudanFn({ n, x, y }) {
  if (n === 0) {
    return x + y;
  }
  if (n > 0) {
    if (y === 0) {
      return x;
    }
    return sudanFn({
      n: n - 1,
      x: sudanFn(
        {
          n,
          x,
          y: y - 1,
        },
      ),
      y: sudanFn({
        n,
        x,
        y: y - 1,
      }) + y,
    });
  }
  return 'Invalid Input';
}

export {
  sudanFn,
};
