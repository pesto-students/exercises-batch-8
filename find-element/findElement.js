
function findElement(elements, fn) {
  return elements.filter(el => fn(el))[0];
}

export {
  findElement,
};
