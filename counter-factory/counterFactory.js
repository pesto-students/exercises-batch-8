
function counterFactory() {
  let i = 0;

  return ({
    increment: (() => {
      i += 1;
      return i;
    }),
    decrement: (() => {
      i -= 1;
      return i;
    }),
  });
}

export {
  counterFactory,
};
