const isNegative = num => num < 0;
const makeIndexPositive = (index, length) => index + length;

const nthArg = index => (...args) => {
  if (isNegative(index)) {
    const positiveIndex = makeIndexPositive(index, args.length);
    return args[positiveIndex];
  }
  return args[index];
};

export {
  nthArg,
};
