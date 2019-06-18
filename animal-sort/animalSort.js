

function animalSort(animals) {
  const comparator = (animal1, animal2) => {
    if (animal1.numberOfLegs === animal2.numberOfLegs) {
      return animal1.name > animal2.name;
    }

    if (animal1.numberOfLegs > animal2.numberOfLegs) {
      return 1;
    }

    return -1;
  };

  return animals.sort(comparator);
}

export {
  animalSort,
};
