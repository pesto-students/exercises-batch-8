
function animalSort(animals) {
  const alphabeticallySortedAnimals = animals.sort((animal1, animal2) => {
    const nameA = animal1.name.toUpperCase();
    const nameB = animal2.name.toUpperCase();
    if (nameA < nameB) {
      return -1;
    }
    if (nameA > nameB) {
      return 1;
    }
    return 0;
  });
  // eslint-disable-next-line max-len
  return alphabeticallySortedAnimals.sort((animal1, animal2) => animal1.numberOfLegs - animal2.numberOfLegs);
}

export {
  animalSort,
};
