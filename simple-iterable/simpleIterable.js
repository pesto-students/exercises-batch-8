function simpleIterable() {
  return {
    [Symbol.iterator]() {
      let step = 0;
      const iterator = {
        next() {
          step++;
          if (step <= 5) {
            return { value: step, done: false };
          }
          return { value: undefined, done: true };
        },
      };
      return iterator;
    },
  };
}

export { simpleIterable };
