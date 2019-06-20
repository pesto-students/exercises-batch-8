
function sudanFn({ n, x, y }) {
  if (n === 0) {
    return x + y;
  }
  if (y === 0 && n >= 0) {
    return x;
  }
  return sudanFn(n - 1, sudanFn(n, x, y - 1), sudanFn(n, x, y - 1) + y);
}

export {
  sudanFn,
};
