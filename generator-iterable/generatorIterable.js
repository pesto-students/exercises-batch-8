function* generatorIterable() {
  let i = 1;
  while (i <= 5) {
    yield i;
    i++;
  }
  i = undefined;
  return i;
}

export { generatorIterable };
