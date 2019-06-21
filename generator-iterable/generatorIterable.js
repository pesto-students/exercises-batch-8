
function* generatorIterable(value = 1) {
  if (value <= 5) {
    yield value;
    yield* generatorIterable(value + 1);
  }
  // return value;
  // let i = 1;
  // while (i <= 5) {
  //   yield i;
  //   i += 1;
  // }
}

export {
  generatorIterable,
};
