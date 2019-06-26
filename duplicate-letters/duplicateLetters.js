
function duplicateLetters(string) {
  const repetitions = {};
  // eslint-disable-next-line guard-for-in
  for (const character of string.split('')) {
    if (repetitions[character] === undefined) {
      repetitions[character] = 1;
    } else {
      repetitions[character] += 1;
    }
  }
  if (Object.values(repetitions).every(noOfRepititions => noOfRepititions === 1)) {
    return false;
  }
  const maxRepetitions = Object.keys(repetitions).reduce((max, chara) => {
    if (repetitions[chara] > max) {
      return repetitions[chara];
    }
    return max;
  }, 1);
  return maxRepetitions;
}

export {
  duplicateLetters,
};
