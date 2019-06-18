const isNumber = chara => Number(chara);
class Person {
  constructor(firstName, lastName, dateOfBirth) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.dateOfBirth = dateOfBirth;
  }

  addDobDigits() {
    return this.dateOfBirth.split('').filter(isNumber).reduce((a, b) => a + Number(b), 0);
  }
}

export {
  Person,
};
