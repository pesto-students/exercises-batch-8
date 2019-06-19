function counter() {
  let count = 0;
  // eslint-disable-next-line func-names
  return function () {
    count += 1;
    return count;
  };
}
export { counter };
