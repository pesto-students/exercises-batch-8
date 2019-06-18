
function tripleAndFilter([...args]) {
  const newArray = args.map(element => element * 3);
  return newArray.filter(element => element % 5 === 0);
}

export { tripleAndFilter };
