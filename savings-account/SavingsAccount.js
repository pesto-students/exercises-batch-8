
function SavingsAccount(accountNumber, email, firstName, lastName, products) {
  if (accountNumber.length < 6) {
    throw Error('Account Number must be a 6-digit number');
  }
  if (!/^[a-zA-Z0-9]*@[a-zA-Z]*\.com$/.test(email)) {
    throw Error('Invalid e-mail');
  }
  if (firstName.length < 3 || firstName.length > 20) {
    throw Error('First name must be between 3 and 20 characters long');
  }
  if (!/^[a-zA-Z]*$/.test(lastName)) {
    throw Error('Last name must contain english alphabets only');
  }
  return {
    _accountNumber: accountNumber,
    _email: email,
    _firstName: firstName,
    _lastName: lastName,
    products: products || [],
  };
}
export {
  SavingsAccount,
};
