
function sumEvenArgs(...args) {
  return args.reduce((sum, val) => (sum + (val % 2 ? 0 : val)), 0);
}

export {
  sumEvenArgs,
};
