class Person {
  constructor(firstName, lastName, dateOfBirth) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.dateOfBirth = dateOfBirth;
  }

  addDobDigits() {
    const dob = this.dateOfBirth.split(/\//).join('');
    return dob.split('').reduce((acc, digit) => acc + Number(digit), 0);
  }
}
export { Person };
