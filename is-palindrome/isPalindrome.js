const regExPatternsToReplace = [
  { regEx: /_/, replacer: '' },
  { regEx: /([^a])\s/i, replacer: '$1' },
  { regEx: /[,.\s-]/g, replacer: '' },
];
const regExReverseWordReplacers = [
  { regEx: /\(/, replacer: ')' },
  { regEx: /\)/, replacer: '(' },
];
const regExWordSeparator = /[,.\s]/g;


const hasWordSeparators = strToCheck => regExWordSeparator.test(strToCheck);

const applyRegExPatterns = (dataToApplyOn, patternsToApply) => {
  let appliedString = dataToApplyOn;

  patternsToApply.map((pattern) => {
    appliedString = appliedString.replace(pattern.regEx, pattern.replacer);
    return true;
  });

  return appliedString;
};

const checkWordForPalindrome = (word) => {
  const reversedWordStringArray = word.split('');
  const reversedWordString = reversedWordStringArray.reverse();

  let reversedWord = reversedWordString.join('');
  reversedWord = applyRegExPatterns(reversedWord, regExReverseWordReplacers);

  return reversedWord.toLowerCase() === word.toLowerCase();
};

const isPalindrome = (givenData) => {
  let stringToTest = String(givenData);

  stringToTest = applyRegExPatterns(stringToTest, regExPatternsToReplace);

  if (hasWordSeparators(stringToTest)) {
    stringToTest = stringToTest.toLowerCase();

    return checkWordForPalindrome(stringToTest);
  }
  return checkWordForPalindrome(stringToTest);
};

export {
  isPalindrome,
};
