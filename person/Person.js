const isDigit = char => /^\d$/.test(char);
class Person {
  constructor(firstName, lastName, dateOfBirth) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.dateOfBirth = dateOfBirth;
  }

  addDobDigits() {
    const digitsOfDOB = this.dateOfBirth.split('').filter(isDigit);
    const digitSum = digitsOfDOB.reduce((acc, digit) => acc + parseInt(digit, 10), 0);
    return digitSum;
  }
}

export {
  Person,
};
