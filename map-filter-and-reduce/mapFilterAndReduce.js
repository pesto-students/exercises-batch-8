
function mapFilterAndReduce(people) {
  return people
    .map(person => person.firstName)
    .filter(name => name.length < 5)
    .reduce((acc, name) => {
      acc[name] = name.length;
      return acc;
    }, {});
}

export {
  mapFilterAndReduce,
};
