
const modOf = number => Math.abs(number);
const squareRootOf = number => Math.sqrt(number);

function primalityTest(number) {
  const modNumber = modOf(number);

  if (modNumber < 2) {
    return false;
  }

  for (let i = 2; i <= squareRootOf(modNumber); i += 1) {
    if (modNumber % i === 0) {
      return false;
    }
  }
  return true;
}
export {
  primalityTest,
};
