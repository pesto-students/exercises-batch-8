
function valuesIn(obj) {
  const valuesArray = [];
  // eslint-disable-next-line guard-for-in
  for (const key in obj) {
    valuesArray.push(obj[key]);
  }
  return valuesArray;
}

export {
  valuesIn,
};
