
function allOfConditions(...functions) {
  return args => functions.reduce((acc, func) => {
    if (acc) {
      return func(args);
    }
    return null;
  }, true);
}

export {
  allOfConditions,
};
