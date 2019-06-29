// This algo work for numbers in range 0 - 3999
function convertToRoman(num) {
  // eslint-disable-next-line no-restricted-globals
  if (isNaN(num)) {
    throw new Error('Not A Number!');
  }

  const possibleNotationsForThousands = ['', 'M', 'MM', 'MMM'];
  const possibleNotationsForHundreds = ['', 'C', 'CC', 'CCC', 'CD', 'D', 'DC', 'DCC', 'DCCC', 'CM'];
  const possibleNotationsForTens = ['', 'X', 'XX', 'XXX', 'XL', 'L', 'LX', 'LXX', 'LXXX', 'XC'];
  const possibleNotationsForOnes = ['', 'I', 'II', 'III', 'IV', 'V', 'VI', 'VII', 'VIII', 'IX'];

  const thousands = possibleNotationsForThousands[Math.floor(num / 1000)];
  const hundereds = possibleNotationsForHundreds[Math.floor((num % 1000) / 100)];
  const tens = possibleNotationsForTens[Math.floor((num % 100) / 10)];
  const ones = possibleNotationsForOnes[Math.floor(num % 10)];

  return thousands + hundereds + tens + ones;
}


export {
  convertToRoman,
};
