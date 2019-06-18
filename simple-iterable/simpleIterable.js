
function simpleIterable() {
  const array = [1, 2, 3, 4, 5];
  return array[Symbol.iterator]();
}

export {
  simpleIterable,
};
