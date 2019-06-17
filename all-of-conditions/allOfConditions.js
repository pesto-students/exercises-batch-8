
function allOfConditions(...conditions) {
  return value => conditions.every(func => func(value));
}

export {
  allOfConditions,
};
