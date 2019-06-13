
function findElement(array, condition) {
  return array.find(v => condition(v));
}

export {
  findElement,
};
