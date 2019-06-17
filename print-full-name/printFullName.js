
function printFullName(person) {
  const { first: firstName, last: lastName } = person;
  return `My name is ${firstName} ${lastName}`;
}

export {
  printFullName,
};
