
function simpleIterable() {
  const values = [1, 2, 3, 4, 5];

  return ({
    [Symbol.iterator]() {
      let index = 0;
      return ({
        next() {
          if (index < values.length) {
            const nextValue = {
              value: values[index],
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
  });
}

export {
  simpleIterable,
};
