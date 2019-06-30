
function SavingsAccount(accountNumber, email, firstName, lastName, ...products) {
  if (String(accountNumber).length !== 6) {
    throw new Error('Account Number must be a 6-digit number');
  }

  const regExValidEmail = /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(.\w{2,3})+$/;
  if (!regExValidEmail.test(email)) {
    throw new Error('Invalid e-mail');
  }

  const firstNameLength = firstName.length;
  if (firstNameLength < 3 || firstNameLength > 20) {
    throw new Error('First name must be between 3 and 20 characters long');
  }

  const regExAlphabetsOnly = /^[a-zA-Z]+$/;
  if (!regExAlphabetsOnly.test(lastName)) {
    throw new Error('Last name must contain english alphabets only');
  }

  return {
    _accountNumber: accountNumber,
    _email: email,
    _firstName: firstName,
    _lastName: lastName,
    products,
  };
}

export {
  SavingsAccount,
};
