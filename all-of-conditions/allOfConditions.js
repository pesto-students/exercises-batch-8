
function allOfConditions(...predicates) {
  return value => predicates.every(func => func(value));
}

export {
  allOfConditions,
};
