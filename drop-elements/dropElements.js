
function dropElements(...args) {
  const anArray = args[0];
  const filteringFunction = args[1];
  // Return all the filtered elements
  return anArray.filter(filteringFunction);
}

export {
  dropElements,
};
