
function sumAll([...inputArray]) {
  const minimumValue = inputArray[0] > inputArray[1] ? inputArray[1] : inputArray[0];

  const maxValue = inputArray[0] > inputArray[1] ? inputArray[0] : inputArray[1];

  return (maxValue * (maxValue + 1) / 2) - ((minimumValue - 1) * minimumValue / 2);
}

export {
  sumAll,
};
