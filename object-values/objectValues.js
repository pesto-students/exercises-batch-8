
function objectValues(obj) {
  return Object.keys(obj).reduce((acc, key) => {
    acc.push(obj[key]);
    return acc;
  }, []);
}

export {
  objectValues,
};
