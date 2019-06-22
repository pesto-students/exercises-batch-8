function curry(fn) {
  const fnArgsCount = fn.length;
  const curryFnRecursive = (collectedArguments) => {
    if (collectedArguments.length === fnArgsCount) {
      return fn(...collectedArguments);
    }
    return (...fnArgs) => curryFnRecursive([...collectedArguments, ...fnArgs]);
  };
  return curryFnRecursive([]);
}

export { curry };
