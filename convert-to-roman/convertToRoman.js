const baseRomans = {
  1: 'I',
  4: 'IV',
  5: 'V',
  9: 'IX',
  10: 'X',
  40: 'XL',
  50: 'L',
  90: 'XC',
  100: 'C',
  400: 'CD',
  500: 'D',
  900: 'CM',
  1000: 'M',
};


function convertToRoman(number) {
  let num = number;
  // eslint-disable-next-line max-len
  const baseRomanNumbersInDecimal = Object.keys(baseRomans).map(numString => parseInt(numString, 10));
  const resultInRoman = [];

  while (num > 0) {
    let largestBase;
    for (const baseRomanNumber of baseRomanNumbersInDecimal) {
      if (baseRomanNumber <= num) {
        largestBase = baseRomanNumber;
      }
    }
    const remainder = Math.floor(num / parseInt(largestBase, 10));
    const quotient = num % parseInt(largestBase, 10);
    num = quotient;

    const romanValue = baseRomans[largestBase].repeat(remainder);
    resultInRoman.push(romanValue);
  }

  return resultInRoman.join('');
}

export {
  convertToRoman,
};
