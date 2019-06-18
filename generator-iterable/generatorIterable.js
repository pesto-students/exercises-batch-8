
function* generatorIterable() {
  for (let result = 1; result !== 6; result += 1) {
    yield result;
  }
}

export {
  generatorIterable,
};
