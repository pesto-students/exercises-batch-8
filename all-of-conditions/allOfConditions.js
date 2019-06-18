function allOfConditions(...inputFunction) {
  return value => inputFunction.every(func => func(value));
}

export { allOfConditions };
