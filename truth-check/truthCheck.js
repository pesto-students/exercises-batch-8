
function truthCheck(array, predicate) {
  const falsyValues = array.filter(value => !value[predicate]);
  return falsyValues.length === 0;
}

export {
  truthCheck,
};
