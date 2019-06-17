
function tripleAndFilter(...args) {
  const anArray = args[0];
  const tripledNumbers = anArray.map(x => x * 3);
  return tripledNumbers.filter(x => x % 5 === 0);
}

export {
  tripleAndFilter,
};
