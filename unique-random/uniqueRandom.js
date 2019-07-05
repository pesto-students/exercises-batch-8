function uniqueRandom(start, end) {
  let previousUnique = 0;
  return function generateUnique() {
    let currentUnique = Math.floor(Math.random() * (end - start)) + start;
    if (currentUnique === previousUnique) {
      return generateUnique();
    } else {
      previousUnique = currentUnique;
      return currentUnique;
    }
  }; //The maximum is exclusive and the minimum is inclusive
}
export {
  uniqueRandom,
};
