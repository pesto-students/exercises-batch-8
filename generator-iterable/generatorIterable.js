
function* generatorIterable() {
  let index = 1;
  while (index < 6) {
    yield index;
    index += 1;
  }
}

export {
  generatorIterable,
};
