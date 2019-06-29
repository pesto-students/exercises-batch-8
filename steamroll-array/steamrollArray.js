function steamrollArray(array) {
  return array.reduce((acc, element) => {
    if (Array.isArray(element)) {
      return acc.concat(steamrollArray(element));
    }
    return acc.concat(element);
  }, []);
}

export { steamrollArray };
