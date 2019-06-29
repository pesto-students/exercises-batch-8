const ACCOUNT_NUMBER_REGEX = new RegExp(/^[0-9]{6}$/);
const EMAIL_REGEX = new RegExp(/^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/);
const FIRSTNAME_REGEX = new RegExp(/^[a-zA-Z]{3,20}$/);
const LASTNAME_REGEX = new RegExp(/^[a-zA-Z]+$/);

const isAccountNumberValid = accountNumber => ACCOUNT_NUMBER_REGEX.test(accountNumber);
const isEmailValid = email => EMAIL_REGEX.test(email);
const isFirstNameValid = firstName => FIRSTNAME_REGEX.test(firstName);
const isLastNameValid = lastName => LASTNAME_REGEX.test(lastName);

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

  get accountNumber() {
    return this.accountNumber;
  }

  set accountNumber(accNo) {
    if (!isAccountNumberValid(accNo)) {
      const error = new Error('Account Number must be a 6-digit number');
      throw error;
    }
    this.accountNumber = accNo;
  }

  get email() {
    return this.email;
  }

  set email(email) {
    if (!isEmailValid(email)) {
      const error = new Error('Invalid e-mail');
      throw error;
    }
    this.email = email;
  }

  get firstName() {
    return this.firstName;
  }

  set firstName(fname) {
    if (!isFirstNameValid(fname)) {
      const error = new Error('First name must be between 3 and 20 characters long');
      throw error;
    }
    this.firstName = fname;
  }

  get lastName() {
    return this.lastName;
  }

  set lastName(lname) {
    if (!isLastNameValid(lname)) {
      const error = new Error('Last name must contain english alphabets only');
      throw error;
    }
    this.lastName = lname;
  }
}

export { SavingsAccount };
