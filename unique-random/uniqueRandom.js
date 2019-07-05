function uniqueRandom(start, end) {
  let previousUnique = 0;
  return function generateUnique() {
    const currentUnique = Math.floor(Math.random() * (end - start)) + start;
    if (currentUnique === previousUnique) {
      return generateUnique();
    }
    previousUnique = currentUnique;
    return currentUnique;
  };
}
export {
  uniqueRandom,
};
