
function isEven(number) {
  // eslint-disable-next-line no-bitwise
  return !(number & 1); // odd number has first bit on
}

export {
  isEven,
};
