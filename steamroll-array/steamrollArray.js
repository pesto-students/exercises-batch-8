function allItemsUnit(array) {
  array.reduce((acc, currentItem) => Array.isArray(currentItem) && acc, true);
}

function steamrollArray(array) {
  function flatten(arr) {
    return arr.reduce((acc, currentItem) => {
      if (Array.isArray(currentItem)) {
        if (allItemsUnit(currentItem)) {
          return [...acc, ...currentItem];
        }
        return [...acc, ...flatten(currentItem)];
      }
      return [...acc, currentItem];
    }, []);
  }
  return flatten(array);
}

export { steamrollArray };
