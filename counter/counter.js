
function counter() {
  let initialValue = 0;
  return () => {
    initialValue += 1;
    return initialValue;
  };
}

export {
  counter,
};
