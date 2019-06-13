
function truthCheck(objArr, predicate) {
  const filtered = objArr.filter(obj => !!obj[predicate]);
  return objArr.length === filtered.length;
}

export {
  truthCheck,
};
