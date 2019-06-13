
function objectValues(object) {
  const resultArray = [];
  // eslint-disable-next-line guard-for-in
  for (const key in object) {
    resultArray.push(object[key]);
  }

  return resultArray;
}

export {
  objectValues,
};
