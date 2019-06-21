
function valuesIn(object) {
  const values = [];
  // eslint-disable-next-line guard-for-in
  for (const key in object) {
    values.push(object[key]);
  }
  return values;
}

export {
  valuesIn,
};
