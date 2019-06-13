// Add data in lookup map to make conversion work beyond 3999
const lookup = {
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

function getRomanSymbolCount(number, romanSymbol) {
  return parseInt(number / lookup[romanSymbol], 10);
}

function convertToRoman(number) {
  let residualNumber = number;
  const romanSymbols = Object.keys(lookup);
  const romanRepresentation = romanSymbols
    .reduce((romanRepresentationAcc, romanSymbol) => {
      const symbolCount = getRomanSymbolCount(residualNumber, romanSymbol);
      residualNumber -= symbolCount * lookup[romanSymbol];
      return romanRepresentationAcc + romanSymbol.repeat(symbolCount);
    }, '');
  return romanRepresentation;
}

export {
  convertToRoman,
};
