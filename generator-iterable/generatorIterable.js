
function* generatorIterable() {
  let num = 1;
  while (num < 6) {
    yield num;
    num += 1;
  }
  return undefined;
}

export {
  generatorIterable,
};
