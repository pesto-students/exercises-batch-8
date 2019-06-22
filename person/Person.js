class Person {
  constructor(firstName, lastName, dateOfBirth) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.dateOfBirth = dateOfBirth;
  }

  addDobDigits() {
    return this.dateOfBirth.split('').reduce((sum, currentChar) => {
      const maybeDigit = Number(currentChar);
      if (!Number.isNaN(maybeDigit)) {
        return sum + maybeDigit;
      }
      return sum;
    }, 0);
  }
}

export {
  Person,
};
