
function counterFactory() {
  let counter = 0;
  const increment = () => {
    counter += 1;
    return counter;
  };

  const decrement = () => {
    counter -= 1;
    return counter;
  };
  return {
    increment,
    decrement,
  };
}

export {
  counterFactory,
};
