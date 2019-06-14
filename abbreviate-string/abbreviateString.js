
function abbreviateString(stringToCheck) {
  if (typeof stringToCheck === 'string') {
    let nameToReturn = '';
    const listOfWords = stringToCheck.split(' ');

    if (listOfWords.length === 1) {
      nameToReturn = listOfWords.slice(0, 1);
    } else {
      const firstWord = listOfWords.shift();
      const lastWord = listOfWords.pop();

      let lastWordShortHand = lastWord.charAt(0);
      lastWordShortHand = lastWordShortHand.toUpperCase();
      lastWordShortHand += '.';

      nameToReturn = `${firstWord} ${lastWordShortHand}`;
    }

    return nameToReturn;
  }

  let errorMessage = "The input data should by of type 'string'.";

  if (typeof stringToCheck === 'number') {
    errorMessage = 'Input parameter of type number is not allowed.';
  } else if (Array.isArray(stringToCheck)) {
    errorMessage = 'Input parameter of type array is not allowed.';
  } else if (stringToCheck === null) {
    errorMessage = 'Input parameter of type null is not allowed.';
  } else if (typeof stringToCheck === 'object') {
    errorMessage = 'Input parameter of type object is not allowed.';
  }

  throw new Error(errorMessage);
}

export {
  abbreviateString,
};
