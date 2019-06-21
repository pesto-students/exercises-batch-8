
class Person {
  constructor(firstName, lastName, dateOfBirth) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.dateOfBirth = dateOfBirth;
  }

  addDobDigits() {
    const isNumber = char => /^\d$/.test(char);
    const dobDigits = this.dateOfBirth.split('').filter(isNumber);
    const sumOfDigits = dobDigits.reduce((sum, digit) => sum + parseInt(digit, 10), 0);
    return sumOfDigits;
  }
}

export {
  Person,
};
