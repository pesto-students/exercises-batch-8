
function findElement(...args) {
  const anArray = args[0];
  const truthyFunction = args[1];
  // Only return the first element of the filtered elements
  return anArray.filter(truthyFunction)[0];
}


export {
  findElement,
};
