function reject(checkFunction, values) {
  if (Array.isArray(values) && values.length === 0) {
    return [];
  }
  return values.filter(val => !checkFunction(val));
}

export {
  reject,
};
