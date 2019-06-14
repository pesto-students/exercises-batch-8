
function truthCheck(elements, predicate) {
  return elements.every(element => Boolean(element[predicate]));
}

export {
  truthCheck,
};
