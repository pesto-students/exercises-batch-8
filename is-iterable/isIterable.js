
function isIterable(param) {
  return (
    typeof param[Symbol.iterator] === 'function'
      && typeof param[Symbol.iterator]().next === 'function'
  );
}

export {
  isIterable,
};
