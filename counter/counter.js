
function counter() {
  let i = 0;
  return () => {
    i += 1;
    return i;
  };
}

export {
  counter,
};
