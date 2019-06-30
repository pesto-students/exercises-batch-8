function slasher(array, elementsToChop) {
  const copy = [...array];
  for (let i = 0; i < elementsToChop; i += 1) {
    copy.shift();
  }
  return copy;
}

export {
  slasher,
};
