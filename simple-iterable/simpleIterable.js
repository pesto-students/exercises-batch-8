function simpleIterable() {
  const numbers = [1, 2, 3, 4, 5];
  return numbers[Symbol.iterator]();
}

export {
  simpleIterable,
};
