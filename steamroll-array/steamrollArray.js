function steamrollArray(array) {
  if (array.every(value => !Array.isArray(value))) {
    return array;
  }
  const oneLevelFattenedArray = array.reduce((acc, value) => {
    if (Array.isArray(value)) {
      acc.push(...value);
    } else {
      acc.push(value);
    }
    return acc;
  }, []);
  return steamrollArray(oneLevelFattenedArray);
}

export { steamrollArray };
