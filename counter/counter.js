
function counter() {
  let count = 0;
  const fnCounter = () => {
    count += 1;
    return count;
  };
  return fnCounter;
}

export {
  counter,
};
