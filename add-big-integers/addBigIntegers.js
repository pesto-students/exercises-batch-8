
const fnSumOfLongIntegerStrings = (intFirst, intSecond) => {
  const [
    firstIntDigits,
    secondIntDigits,
  ] = [intFirst.split('').reverse(), intSecond.split('').reverse()];

  const DECIMAL = 10;
  const sum = [];
  let carryForward = 0;

  for (const [index, digitChar] of firstIntDigits.entries()) {
    const secondDigit = (typeof secondIntDigits[index] !== 'undefined')
      ? secondIntDigits[index]
      : 0;
    const sumOfDigits = Number(digitChar) + Number(secondDigit) + Number(carryForward);
    const lastDigit = sumOfDigits % 10;

    sum.unshift(`${lastDigit}`);
    carryForward = parseInt(sumOfDigits / 10, DECIMAL);
  }
  if (carryForward) {
    sum.unshift(`${carryForward}`);
  }

  return sum.join('');
};

function addBigIntegers(numberString) {
  const numbers = numberString.split(/\r|\r\n|\n/);
  const [totalNumbersToAdd, ...restNumbers] = numbers;
  const numbersToAdd = restNumbers.slice(0, totalNumbersToAdd);

  const lengthWiseNumbersToAdd = numbersToAdd.sort((a, b) => b.length > a.length);
  const sumOfIntegers = lengthWiseNumbersToAdd.reduce((sumAccumulator, stringOfDigits) => {
    const paramsToPass = [];
    if ((Number(sumAccumulator) > Number(stringOfDigits))) {
      paramsToPass.push(sumAccumulator, stringOfDigits);
    } else {
      paramsToPass.push(stringOfDigits, sumAccumulator);
    }
    return fnSumOfLongIntegerStrings(...paramsToPass);
  }, '');

  return sumOfIntegers;
}

export {
  addBigIntegers,
};
