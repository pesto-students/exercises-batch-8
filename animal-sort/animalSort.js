
function animalSort(animals) {
  return animals.sort((animal1, animal2) => {
    if (animal1.numberOfLegs - animal2.numberOfLegs !== 0) {
      return animal1.numberOfLegs - animal2.numberOfLegs;
    }
    return animal1.name > animal2.name;
  });
}

export {
  animalSort,
};
