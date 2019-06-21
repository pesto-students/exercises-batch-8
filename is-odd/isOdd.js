
function isOdd(number) {
  // eslint-disable-next-line no-bitwise
  return Boolean(number & 1); // odd number has first bit on
}

export {
  isOdd,
};
