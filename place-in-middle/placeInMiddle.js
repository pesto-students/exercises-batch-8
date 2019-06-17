function placeInMiddle([...array1], [...array2]) {
  const { length } = array1;
  const arraystart = array1.splice(0, length / 2);
  return [...arraystart, ...array2, ...array1];
}

export { placeInMiddle };
