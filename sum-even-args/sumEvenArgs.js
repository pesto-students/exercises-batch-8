function sumEvenArgs(...array) {
  const evenPredicate = number => number % 2 === 0;
  const evenElementsArray = array.filter(evenPredicate);
  const sum = evenElementsArray.reduce((acc, currentElement) => acc + currentElement, 0);
  return sum;
}

export { sumEvenArgs };
