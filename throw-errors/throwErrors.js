
function throwErrors() {
  return variableThatDoesNotExists;
}

function invokeErrors() {
  let nameOfError = '';
  try {
    throwErrors();
  } catch (e) {
    nameOfError = e.name;
    return e.name;
  }
  return nameOfError;
}

const errorName = invokeErrors();

export {
  throwErrors,
  errorName,
};
