function animalSortPredicate() {
  return (a, b) => {
    if (a.numberOfLegs === b.numberOfLegs) {
      return a.name.localeCompare(b.name);
    }
    return a.numberOfLegs - b.numberOfLegs;
  };
}

function animalSort(animals) {
  const sortedAnimals = animals.sort(animalSortPredicate());
  return sortedAnimals;
}

export { animalSort };
