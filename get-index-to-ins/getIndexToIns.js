
function getIndexToIns(arr, num) {
  arr.sort((a, b) => a - b);
  for (const el of arr) {
    if (num <= el) {
      return arr.indexOf(el);
    }
  }
  return arr.length; // insert at end
}

export {
  getIndexToIns,
};
