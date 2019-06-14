
function boolean(...args) {
  // Test based on truthy-ness of the argument
  if (args) {
    return false;
  }
  return true;
}

export {
  boolean,
};
