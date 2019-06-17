function allOfConditions(...args) {
  let functions = [];
  if (typeof args[0] === 'function') {
    functions = args;
    return function (arg) {
      for (const fn in functions) {
        if (functions[fn](arg) === false) {
          return false;
        }
      }
      return true;
    };
  }
  throw new Error('Unexpected arguments to the function');
}

export { allOfConditions };
