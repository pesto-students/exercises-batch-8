
function doubleOddNumbers(...args) {
  const anArray = args[0];
  const oddNumbers = anArray.filter(x => x % 2 === 1);
  return oddNumbers.map(x => x * 2);
}

export {
  doubleOddNumbers,
};
