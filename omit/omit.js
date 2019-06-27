function omit(keysToFilter, object) {
  return Object.keys(object).reduce((acc, key) => {
    const updatedAcc = acc;
    if (!keysToFilter.includes(key)) {
      updatedAcc[key] = object[key];
    }
    return updatedAcc;
  }, {});
}

export { omit };
