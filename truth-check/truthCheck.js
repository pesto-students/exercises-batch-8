
function truthCheck(objArr, predicate) {
  return Boolean(objArr.reduce((acc, curr) => acc && curr[predicate], true));
}

export {
  truthCheck,
};
