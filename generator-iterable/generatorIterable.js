
function* generatorIterable() {
  let result = 0;
  while (result !== 5) {
    result += 1;
    yield result;
  }
}

export {
  generatorIterable,
};
