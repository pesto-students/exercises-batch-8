

class Person {
  constructor(firstName, lastName, dateOfBirth) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.dateOfBirth = dateOfBirth;
  }

  static sum(a, b) {
    return a + b;
  }

  static isDigit(char) {
    const digitRegex = /^[0-9]$/;
    return digitRegex.exec(char);
  }

  addDobDigits() {
    const { sum, isDigit } = Person;
    const dobElementsArray = this.dateOfBirth.split('');
    const digits = dobElementsArray.filter(isDigit).map(Number);
    return digits.reduce(sum);
  }
}

export {
  Person,
};
