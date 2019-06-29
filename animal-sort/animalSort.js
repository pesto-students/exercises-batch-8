function sortAnimalByName(animalOne, animalTwo) {
  if (animalOne.name.toUpperCase() > animalTwo.name.toUpperCase()) {
    return -1;
  }
  if (animalOne.name.toUpperCase() < animalTwo.name.toUpperCase()) {
    return 1;
  }
  return 0;
}

function numberOfLegsDifference(animalOne, animalTwo) {
  return animalOne.numberOfLegs - animalTwo.numberOfLegs;
}

function animalSort(animals) {
  return animals.sort(
    // eslint-disable-next-line max-len
    (animalOne, animalTwo) => numberOfLegsDifference(animalOne, animalTwo)
      - sortAnimalByName(animalOne, animalTwo),
  );
}

export { animalSort };
