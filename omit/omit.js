function omit(keysToFilter, object) {
  const allKeys = [];
  // eslint-disable-next-line guard-for-in
  for (const key in object) {
    allKeys.push(key);
  }
  return allKeys.reduce((acc, key) => {
    const updatedAcc = acc;
    if (!keysToFilter.includes(key)) {
      updatedAcc[key] = object[key];
    }
    return updatedAcc;
  }, {});
}

export { omit };
