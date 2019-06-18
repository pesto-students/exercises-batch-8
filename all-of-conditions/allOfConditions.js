
const allOfConditions = (...functions) => (arg) => {
  functions.reduce((previousReturnVal, func) => {
    if (previousReturnVal) {
      return func(arg);
    }
    return false;
  }, true);
};

export {
  allOfConditions,
};
