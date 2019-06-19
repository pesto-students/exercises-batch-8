function curry(inputFunction, count = 0, args = []) {
  const argsLength = inputFunction.length;
  if (count === argsLength) {
    return inputFunction.apply(null, args);
  }
  return function () {
    return curry(inputFunction, count + arguments.length, [...args, ...arguments]);
  };
}

export { curry };
