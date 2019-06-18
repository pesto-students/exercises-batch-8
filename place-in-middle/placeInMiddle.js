function placeInMiddle(firstArray, secondArray) {
  if (firstArray.length === 0) {
    return secondArray;
  }
  const placeLocation = Math.floor(firstArray.length / 2);
  return firstArray.reduce((acc, currentItem, index) => {
    if (index === placeLocation) {
      return [...acc, ...secondArray, currentItem];
    }
    return [...acc, currentItem];
  }, []);
}

export { placeInMiddle };
