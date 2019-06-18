function simpleIterable() {
  const numbers = [1, 2, 3, 4, 5];

  return {
    [Symbol.iterator]() {
      let index = 0;
      return ({
        next() {
          if (index < numbers.length) {
            const nextValue = {
              value: numbers[index],
              done: false,
            };
            index += 1;
            return nextValue;
          }
          return ({
            value: undefined,
            done: true,
          });
        },
      });
    },
  };
}

export {
  simpleIterable,
};
