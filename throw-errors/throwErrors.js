function throwErrors(...args) {
  function doesNothing() {
    notdefined;
  }
  try {
    doesNothing();
  } catch (e) {
    if (e instanceof ReferenceError) {
      return e.name;
    }
  }
}

export { throwErrors };
