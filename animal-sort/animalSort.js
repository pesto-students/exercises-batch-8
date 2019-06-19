
function animalSort(animals) {
  if (animals.length === 0) {
    return [];
  }
  const sortAnimalsByName = animals.sort((animal1, animal2) => (
    animal1.name.localeCompare(animal2.name)
  ));

  const sortAnimalsByLegs = sortAnimalsByName.sort((animal1, animal2) => (
    animal1.numberOfLegs - animal2.numberOfLegs
  ));

  return sortAnimalsByLegs;
}

export {
  animalSort,
};
