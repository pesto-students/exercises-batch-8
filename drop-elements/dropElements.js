
function dropElements(arr, fn) {
  return arr.filter(element => fn(element));
}

export {
  dropElements,
};
