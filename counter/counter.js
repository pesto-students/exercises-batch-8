
function counter() {
  let val = 0;
  function incrementer() {
    val += 1;
    return val;
  }
  return incrementer;
}

export {
  counter,
};
