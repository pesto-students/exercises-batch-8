function sumEvenArgs(...args) {
  const result = args.reduce((accumulator, current, key) => {
    if (key % 2 !== 0) {
      return accumulator + current;
    }
    return accumulator;
  }) - args[0];

  return result;
}

export { sumEvenArgs };
