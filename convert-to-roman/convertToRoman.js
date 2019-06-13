
function convertToRoman(num) {
  const romanSymbols = {
    M: 1000,
    CM: 900,
    D: 500,
    CD: 400,
    C: 100,
    XC: 90,
    L: 50,
    XL: 40,
    X: 10,
    IX: 9,
    V: 5,
    IV: 4,
    I: 1,
  };

  let numberCopy = num;
  let numInRoman = '';
  for (const i of Object.keys(romanSymbols)) {
    const q = Math.floor(numberCopy / romanSymbols[i]);
    numberCopy -= q * romanSymbols[i];
    numInRoman += i.repeat(q);
  }
  return numInRoman;
}

export {
  convertToRoman,
};
