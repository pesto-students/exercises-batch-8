const positiveArg = (argNum) => {
  const argsReceived = [];
  const curried = (...args) => {
    args.forEach(arg => argsReceived.push(arg));
    if (argsReceived.length >= argNum) {
      return argsReceived[argNum - 1];
    }
    return curried;
  };

  Object.defineProperty(curried, 'length', { value: argNum });
  return curried;
};

const negativeArg = (argNum) => {
  const handler = (...args) => args[args.length + argNum];
  Object.defineProperty(handler, 'length', { value: 1 });
  return handler;
};

const nthArg = (num) => {
  if (num >= 0) {
    return positiveArg(num + 1);
  }
  return negativeArg(num);
};

export {
  nthArg,
};
