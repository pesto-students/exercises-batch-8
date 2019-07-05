function uniqueRandom(lowerLimit, upperLimit) {
  let lastRandom;

  return function getRandom(previousRandomValue) {
    const randomNumber = Math.floor(Math.random() * (upperLimit - lowerLimit + 1)) + lowerLimit;
    const lastRandomValueToCheck = previousRandomValue || lastRandom;

    const safeRandomValue = (randomNumber === lastRandomValueToCheck)
      ? getRandom(lastRandom)
      : randomNumber;

    lastRandom = safeRandomValue;

    return safeRandomValue;
  };
}

export {
  uniqueRandom,
};
