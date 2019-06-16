
function dropElements(array, dropFunc) {
  return array.filter(v => dropFunc(v));
}

export {
  dropElements,
};
