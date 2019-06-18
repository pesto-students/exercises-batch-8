const animalNameComparator = (animalA, animalB) => {
  if (animalA.name > animalB.name) return 1;
  return -1;
};

const animalLegComparator = ((animalA, animalB) => {
  const legDiff = animalA.numberOfLegs - animalB.numberOfLegs;
  const hasSameNoOfLegs = legDiff === 0;
  if (hasSameNoOfLegs) return animalNameComparator(animalA, animalB);
  return animalA.numberOfLegs - animalB.numberOfLegs;
});

function animalSort(animalObjects) {
  if (animalObjects.length === 0) return animalObjects;
  return animalObjects.sort(animalLegComparator);
}

export {
  animalSort,
};
