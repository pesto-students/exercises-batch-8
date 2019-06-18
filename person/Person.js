class Person {
  constructor(firstName, lastName, dateOfBirth) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.dateOfBirth = dateOfBirth;
  }

  addDobDigits() {
    const dobText = this.dateOfBirth;
    const dobDigits = dobText.replace(/[^\d]/g, '');
    const digits = dobDigits.split('');
    const doTotal = (acc, digit) => acc + parseInt(digit, 10);
    const sumOfDigits = digits.reduce(doTotal, 0);

    return sumOfDigits;
  }
}

export {
  Person,
};
