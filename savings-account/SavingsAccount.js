const EMAIL_REGEX = "^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$";
const ENGLISH_LETTERS_REGEX = '^[a-zA-Z]+$';

function validateAccountNumber(accountNumber) {
  return accountNumber.length === 6;
}

function validateEmail(email) {
  return email.match(EMAIL_REGEX);
}

function validateNameLength(name) {
  return (name.length > 3 && name.length < 20);
}

function validateNameContent(name) {
  return name.match(ENGLISH_LETTERS_REGEX);
}

function validate(accountNumber, email, firstname, lastname, ...products) {
  if (!validateAccountNumber(accountNumber)) {
    throw new Error('Account Number must be a 6-digit number');
  }

  if (!validateNameLength(firstname)) {
    throw new Error('First name must be between 3 and 20 characters long');
  }
  if (!validateNameLength(lastname)) {
    throw new Error('Last name must be between 3 and 20 characters long');
  }
  if (!validateNameContent(lastname)) {
    throw new Error('Last name must contain english alphabets only');
  }
  if (!validateNameContent(firstname)) {
    throw new Error('First name must contain english alphabets only');
  }
  if (!validateEmail(email)) {
    throw new Error('Invalid e-mail');
  }
  if (products === undefined) {
    throw new Error('Products is undefined');
  }
}

function SavingsAccount(accountNumber, email, firstname, lastname, ...products) {
  validate(accountNumber, email, firstname, lastname, ...products);
  this._accountNumber = accountNumber; // eslint-disable-line no-underscore-dangle
  this._email = email; // eslint-disable-line no-underscore-dangle
  this._firstName = firstname; // eslint-disable-line no-underscore-dangle
  this._lastName = lastname; // eslint-disable-line no-underscore-dangle
  this.products = products;
  return this;
}

export { SavingsAccount };
