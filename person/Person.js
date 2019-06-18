/* eslint-disable class-methods-use-this */
class Person {
  constructor(firstName, lastName, dateOfBirth) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.dateOfBirth = dateOfBirth;
  }

  addDobDigits() {
    const dateWithoutSeparator = [...this.dateOfBirth].filter(char => char !== '/');
    const dateNumberArray = dateWithoutSeparator.map(Number);
    const sumOfDateDigits = dateNumberArray.reduce((sum, digit) => sum + digit, 0);
    return sumOfDateDigits;
  }
}

export {
  Person,
};
