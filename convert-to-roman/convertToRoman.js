const romanNumMapping = new Map([[1000, 'M'], [900, 'CM'], [500, 'D'], [400, 'CD'], [100, 'C'], [90, 'XC'], [50, 'L'], [40, 'XL'], [10, 'X'], [9, 'IX'], [5, 'V'], [4, 'IV'], [1, 'I']]);

function convertToRoman(...indoArabicNum) {
  let indoArabicNumeral = indoArabicNum;
  let romanEquivalent = '';
  for (const [indoArabicSymbol, romanSymbol] of romanNumMapping.entries()) {
    let romanSymbolRepetitions = Math.floor(indoArabicNumeral / indoArabicSymbol);
    while (romanSymbolRepetitions > 0) {
      romanEquivalent += romanSymbol;
      indoArabicNumeral -= indoArabicSymbol;
      romanSymbolRepetitions -= 1;
    }
  }
  return romanEquivalent;
}

export {
  convertToRoman,
};
