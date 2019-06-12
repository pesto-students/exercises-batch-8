
function isEven(num) {
  // eslint-disable-next-line no-bitwise
  return Boolean(num & 1 === 0);
}

export {
  isEven,
};
