
const simpleIterable = () => ({
  [Symbol.iterator]() {
    let i = 1;
    const iterator = {
      next() {
        if (i < 6) {
          const valueObj = { value: i, done: false };
          i += 1;
          return valueObj;
        }
        return { done: true };
      },
    };
    return iterator;
  },
});


export {
  simpleIterable,
};
