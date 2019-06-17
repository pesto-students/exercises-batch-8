function allOfConditions(...functions) {
  const trueOrFalse = params => functions.every(fn => fn(params));

  return trueOrFalse;
}

export {
  allOfConditions,
};
