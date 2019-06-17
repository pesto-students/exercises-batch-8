
class Person {
  constructor(firstName, lastName, dateOfBirth) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.dateOfBirth = dateOfBirth;
  }

  // eslint-disable-next-line class-methods-use-this
  addDobDigits() {
    // eslint-disable-next-line no-restricted-globals
    const isNumber = character => !isNaN(character);
    const sum = (acc, digit) => acc + Number(digit);

    const digits = String(this.dateOfBirth).split('').filter(isNumber);
    return digits.reduce(sum, 0);
  }
}

export {
  Person,
};
