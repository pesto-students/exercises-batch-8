
function SavingsAccount(accountNumber, email, firstName, lastName, products = []) {
  const emailRegex = /^([a-zA-Z0-9]+@[a-z.]+)$/i;
  const firstNameRegex = /^[A-Z]{3,20}/i;
  const lastNameRegex = /[a-z]+$/i;
  if (accountNumber.length !== 6) {
    throw new Error('Account Number must be a 6-digit number');
  } else if (!emailRegex.test(email)) {
    throw new Error('Invalid e-mail');
  } else if (!firstNameRegex.test(firstName)) {
    throw new Error('First name must be between 3 and 20 characters long');
  } else if (!lastNameRegex.test(lastName)) {
    throw new Error('Last name must contain english alphabets only');
  }

  this._accountNumber = accountNumber;
  this._email = email;
  this._firstName = firstName;
  this._lastName = lastName;
  this.products = products;
}

export {
  SavingsAccount,
};
