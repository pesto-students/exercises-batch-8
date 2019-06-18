
function mapFilterAndReduce(people) {
  return people.filter(person => person.firstName.length < 5)
    .reduce((acc, person) => {
      acc[person.firstName] = person.firstName.length;
      return acc;
    }, {});
}

export {
  mapFilterAndReduce,
};
