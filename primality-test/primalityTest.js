
function primalityTest(number) {
  const absoluteNumber = Math.abs(number);

  if (absoluteNumber < 2) {
    return false;
  }

  for (let i = 2; i <= Math.sqrt(absoluteNumber); i += 1) {
    if ((absoluteNumber % i) === 0) {
      return false;
    }
  }
  return true;
}

export {
  primalityTest,
};
