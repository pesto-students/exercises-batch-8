
function animalSort(animals) {
  animals.sort((animalA, animalB) => {
    if (animalA.numberOfLegs === animalB.numberOfLegs) {
      return animalA.name > animalB.name; // Sort by name
    }
    return animalA.numberOfLegs - animalB.numberOfLegs;
  });
  return animals;
}

export {
  animalSort,
};
