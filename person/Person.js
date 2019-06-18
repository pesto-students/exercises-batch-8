
class Person {
  constructor(firstName, lastName, dateOfBirth) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.dateOfBirth = dateOfBirth;
  }
}

Person.prototype.addDobDigits = function addDobDigits() {
  const dobDigits = this.dateOfBirth.split(/\//).join('');
  return dobDigits.split('').reduce((acc, digit) => acc + Number(digit), 0);
};
export {
  Person,
};
