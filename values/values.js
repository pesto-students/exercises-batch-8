
function values(obj) {
  return Object.keys(obj).reduce((acc, key) => {
    // eslint-disable-next-line no-prototype-builtins
    if (obj.propertyIsEnumerable(key)) {
      acc.push(obj[key]);
    }
    return acc;
  }, []);
}

export {
  values,
};
