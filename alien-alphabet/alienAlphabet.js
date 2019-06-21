
function alienAlphabet(strings) {
  const resultArray = [];
  strings.map((string) => {
    string.split('').map((character) => {
      if (!resultArray.includes(character)) {
        resultArray.push(character);
      }
      return null;
    });
    return null;
  });
  return resultArray;
}

export {
  alienAlphabet,
};
