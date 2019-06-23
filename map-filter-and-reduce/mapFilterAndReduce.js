
function mapFilterAndReduce(persons) {
  const filteredPersons = persons.filter(person => person.firstName.length < 5);
  return filteredPersons.reduce((acc, person) => {
    acc[person.firstName] = person.firstName.length;
    return acc;
  }, {});
}

export {
  mapFilterAndReduce,
};
