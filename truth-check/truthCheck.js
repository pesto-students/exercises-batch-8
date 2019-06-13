
function truthCheck(peopleObject, field) {
  if (peopleObject.map(person => person[field]).filter(Boolean).length !== peopleObject.length) {
    return false;
  }
  return true;
}

export {
  truthCheck,
};
