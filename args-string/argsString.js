
function argsString(string, array) {
  return array
    .reduce(
      (stringAcc, valueToPlace) => stringAcc.replace('{}', valueToPlace),
      string,
    );
}

export {
  argsString,
};
