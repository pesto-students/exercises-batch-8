
function errorName(...args) {
  try {
  undefinedName;
  } catch (e) {
  if (e instanceof ReferenceError) {
    return e.name;
    } 
  } 
}

export {
  throwError,
};
