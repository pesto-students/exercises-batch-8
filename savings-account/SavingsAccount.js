/* eslint-disable no-underscore-dangle */
const emailRegex = /^(([^<>()[\].,;:\s@"]+(\.[^<>()[\].,;:\s@"]+)*)|(sa".+"))@(([^<>()[]\.,;:\s@"]+\.)+[^<>()[]\.,;:\s@"]{2,})$/i;
function SavingsAccount(accountNumber, email, firstName, lastName) {
  if (accountNumber.length !== 6) {
    throw new Error('Account Number must be a 6-digit number');
  }
  if (!emailRegex.test(String(email).toLowerCase())) {
    throw new Error('Invalid e-mail');
  }
  if (firstName.length < 3 || firstName.length > 20) {
    throw new Error('First name must be between 3 and 20 characters long');
  }
  if (!/^[a-z]+$/i.test(lastName)) {
    throw new Error('Last name must contain english alphabets only');
  }
  this._accountNumber = accountNumber;
  this._email = email;
  this._firstName = firstName;
  this._lastName = lastName;
  this.products = [];
}


export {
  SavingsAccount,
};
