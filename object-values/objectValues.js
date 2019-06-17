
function objectValues(obj) {
  return Object.values(obj).map((val) => {
    if (val) {
      return val.toString();
    }
    return val;
  });
}

export {
  objectValues,
};
