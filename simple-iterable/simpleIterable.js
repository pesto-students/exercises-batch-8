function simpleIterable() {
  let index = 0;
  return {
    [Symbol.iterator]() {
      return {
        next: () => {
          if (index >= 5) {
            index = 0;
            return { done: true, value: undefined };
          }
          index += 1;
          return { done: false, value: index };
        },
      };
    },
  };
}

export {
  simpleIterable,
};
