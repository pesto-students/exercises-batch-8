
function findElement(array, func) {
  return array.filter(ele => func(ele))[0];
}

export {
  findElement,
};
