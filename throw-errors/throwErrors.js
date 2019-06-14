
function throwErrors() {
  try {
    const y = x; // y cannot be referenced (used)
  } catch (e) {
    return e.name;
  }
}

const errorName = throwErrors();

export {
  throwErrors,
  errorName,
};
