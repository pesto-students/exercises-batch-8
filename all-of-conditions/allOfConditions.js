
function allOfConditions(...functions) {
  return input => functions.every(func => func(input));
}

export {
  allOfConditions,
};
