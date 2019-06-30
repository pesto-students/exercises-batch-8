
function truthCheck(collection = [], predicate = '') {
  return collection.every(element => Boolean(element[predicate]));
}

export {
  truthCheck,
};
