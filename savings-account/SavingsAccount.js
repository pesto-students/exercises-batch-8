/* eslint-disable no-underscore-dangle */
const regExObject = {
  accountNumber: /^[0-9]{6}$/,
  email: /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/,
  firstName: /^[a-zA-Z]{3,20}$/,
  lastName: /^[a-zA-Z]+$/,
};

function isValidAccountNumber(accNumber) {
  const { accountNumber } = regExObject;
  return accountNumber.test(accNumber);
}

function isValidEmail(email) {
  const { email: emailRegEx } = regExObject;
  return emailRegEx.test(email);
}

function isValidFirstName(fName) {
  const { firstName } = regExObject;
  return firstName.test(fName);
}

function isValidLastName(lName) {
  const { lastName } = regExObject;
  return lastName.test(lName);
}

class SavingsAccount {
  constructor(
    accountNumber,
    email,
    firstName,
    lastName,
  ) {
    this.accountNumber = accountNumber;
    this.email = email;
    this.firstName = firstName;
    this.lastName = lastName;
    this.products = [];
  }

  set accountNumber(number) {
    if (!isValidAccountNumber(number)) {
      throw new Error('Account Number must be a 6-digit number');
    }
    this._accountNumber = number;
  }

  get accountNumber() {
    return this._accountNumber;
  }

  set email(email) {
    if (!isValidEmail(email)) {
      throw new Error('Invalid e-mail');
    }
    this._email = email;
  }

  get email() {
    return this._email;
  }

  set firstName(name) {
    if (!isValidFirstName(name)) {
      throw new Error('First name must be between 3 and 20 characters long');
    }
    this._firstName = name;
  }

  get firstName() {
    return this._firstName;
  }

  set lastName(name) {
    if (!isValidLastName(name)) {
      throw new Error('Last name must contain english alphabets only');
    }
    this._lastName = name;
  }

  get lastName() {
    return this._lastName;
  }
}

export {
  SavingsAccount,
};
