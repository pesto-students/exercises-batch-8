
function alienAlphabet(arrayOfAlphabets) {
  const alphabetString = arrayOfAlphabets.join('');
  const arrayOfIndividualCharacters = alphabetString.split('');
  const distinctCharacters = new Set(arrayOfIndividualCharacters);
  return Array.from(distinctCharacters);
}

export {
  alienAlphabet,
};
