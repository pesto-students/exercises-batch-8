
function allOfConditions(...predicates) {
  return input => predicates.every(predicate => predicate(input));
}

export {
  allOfConditions,
};
